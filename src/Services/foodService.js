import axios from 'axios';
import { FoodURL } from './common';
import cookies from 'react-cookies';

class FoodService {
    static getProductFoods() {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(FoodURL.PRODUCT_FOOD_API_URL);
    }
}

export default FoodService;