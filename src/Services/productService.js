import axios from 'axios';
import { ProductURL } from './common';
import cookies from 'react-cookies';

class ProductService {
    static getProduct(categoryId) {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(`${ProductURL.PRODUCT_API_URL}/${categoryId}`);
    }
    static getProductById(productId) {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(`${ProductURL.GET_PRODUCT_BY_ID_API_URL}/${productId}`);
    }

    static getProductBySearch(keySearch) {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(`${ProductURL.GET_PRODUCT_BY_SEARCH_API_URL}?keySearch=${keySearch}`);
    }
}

export default ProductService;