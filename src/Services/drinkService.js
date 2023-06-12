import axios from 'axios';
import { DrinkURL } from './common';

class DrinkService {
    static getProductDrinks() {
        return axios.get(DrinkURL.PRODUCT_DRINK_API_URL);
    }
}

export default DrinkService;