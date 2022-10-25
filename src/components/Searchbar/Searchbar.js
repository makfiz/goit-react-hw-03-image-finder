import { Formik } from 'formik'
import { ImSearch } from "react-icons/im";
import { SearchForm, SearchInp, Header, SFBtn } from './Searchbar.styled'
const SearchBar = ({ onSubmit }) => {



    const handleSubmit = (values) => {
       onSubmit(values.search)
    }


    
    const initialValues = {
        search: '',
    }
    return (
        <Header>   
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <SearchForm  autoComplete="off">
                    <SFBtn type="submit">
                    <ImSearch/>
                    </SFBtn>

                    <SearchInp
                        name='search'
                        type="text"
                        autoFocus
                        placeholder="Search images and photos"  
                    />
                </SearchForm>
            </Formik>
        </Header>      
    )

    
    
}




export default SearchBar