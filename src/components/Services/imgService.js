import axios from 'axios';

export const fetchIMG = async (searchQuery, page) => {
        axios.defaults.baseURL = 'https://pixabay.com/api';
        const API_KEY = '29838677-bd4eb1e45df6d4e49f9d08181';
        const option = 'image_type=photo&orientation=horizontal&safesearch=true'
        try {
            const response = await axios.get(`/?key=${API_KEY}&${option}&q=${searchQuery}&page=${page}&per_page=12`)
            
            return response
        } catch(error) {
            console.log(error)
        }
    }
