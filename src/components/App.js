import { Box } from "components/utils/Box";
import SearchBar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Loader from 'components/Loader/Loader'
import Modal from 'components/Modal/Modal'
import {Button} from 'components/Button/Button'

import React, { Component } from "react";
import { fetchIMG } from './Services/imgService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

class App extends Component {

  state = {
    searchValue: '',
    imgItems: null,
    isLoading: false,
    curPage: 1,
    error: null,
    showBtn: false,
    image: '',
    tags: ''
    
  }
  
  submitFormHandler = (formValue) => {
      const {searchValue} = this.state
      if (formValue.trim() === '') {
       return toast.error('Please enter image or photo name!')
    }

     if (searchValue === formValue) {
      return toast.error(`"${searchValue}" has already been found`)
    }
    
    this.setState({
      searchValue: formValue,
      imgItems: [],
      curPage:1,
    })

  }

  componentDidUpdate(prevProps, prevState) {
    const {searchValue, curPage, imgItems, image , tags} = this.state
  
    if (
      prevState.curPage !== curPage ||
      prevState.searchValue !== searchValue
    )
    this.getIMGs(searchValue, curPage)
    
    if (prevState.imgItems && imgItems.length > 12 && prevState.imgItems.length !== imgItems) {
          if (prevState.image !== image || prevState.tags !== tags) return
      scroll.scrollToBottom()
    }
  }



  getIMGs = async (searchValue, curPage) => {
    try {
       this.setState({
        isLoading: true,
        showBtn: false,
       });
      
      const response = await fetchIMG(searchValue, curPage)
      console.log(response.data.hits)
      if (response.data.hits.length === 0) {
        return toast.error(`No results were found for "${searchValue}"`) 
      }

      
              
        this.setState(prevState => ({
        imgItems: [...prevState.imgItems, ...response.data.hits],
        showBtn:  true
    }))
    } catch(error)  {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  showMoreHandler = () => {
    this.setState(prevState => ({
        curPage: prevState.curPage + 1
    }))
}

  onImgClickHandler = (e) => {
     if (e.target.nodeName !== 'IMG') {
        return
    }

    this.setState({
        image: e.target.dataset.url,
        tags: e.target.alt
      })
  }

  modalCloseHandler = () => {
      this.setState({
        image: '',
        tags: ''
      })
  }
  
  render() {
    const {imgItems, isLoading, showBtn, image, tags} = this.state
    return (
      <>
      <SearchBar onSubmit={this.submitFormHandler} />
      <Box 
        width="1330px"
        ml="auto"
        mr="auto"
        as="section">  
        
          {isLoading && <Loader />}
          {<ImageGallery imgs={imgItems} onClick={this.onImgClickHandler}></ImageGallery>}
          {showBtn && <Button onClickBtn={this.showMoreHandler} />}
          {image && <Modal onClick={this.modalCloseHandler}><img src={image} alt={tags} /></Modal>}
          <ToastContainer />
        </Box>
      </>  
     );
  }

};


export default App