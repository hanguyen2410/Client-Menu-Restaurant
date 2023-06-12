import axios from 'axios';
import { SpecialURL } from './common';
import cookies from 'react-cookies';

class SpecialProductService {
    static getSpecialProducts(categoryId) {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(`${SpecialURL.PRODUCT_SPECIAL_API_URL}/${categoryId}`);
    }
}

export default SpecialProductService;