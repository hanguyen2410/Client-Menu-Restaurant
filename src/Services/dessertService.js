import axios from 'axios';
import { DessertURL } from './common';

class DessertService {
    static getProductDessert() {
        return axios.get(DessertURL.DESSERT_API_URL);
    }
}

export default DessertService;