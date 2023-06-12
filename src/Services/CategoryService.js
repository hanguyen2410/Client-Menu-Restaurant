import axios from 'axios';
import { CategoryURL } from './common';
import cookies from 'react-cookies'

class CategoryService {
    static getCategoryProduct() {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(CategoryURL.CATEGORY_API_URL);
    }
}

export default CategoryService;