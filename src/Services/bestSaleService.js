import axios from 'axios';
import { BestURL } from './common';
import cookies from 'react-cookies';

class BestSaleService {
    static getBestSaleProducts() {
        const accessToken = cookies.load('JWT')
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return axios.get(BestURL.PRODUCT_BEST_API_URL);
    }
}

export default BestSaleService;