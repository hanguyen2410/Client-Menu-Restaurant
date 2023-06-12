const SERVER_API = process.env.REACT_APP_API_URL;
const BASE_SERVER_API = `${SERVER_API}/api`;
// const BASE_OI_API = `${BASE_SERVER_API}/order-items`;

export const LOGIN_API_URL = `${BASE_SERVER_API}/auth/login`;
const CUSTOMER_API_URL = `${BASE_SERVER_API}/customers`;
export const SOCKET_SERVER = 'http://localhost:25002';

export const FoodURL = {
  PRODUCT_FOOD_API_URL: `${CUSTOMER_API_URL}/get-all-foods`,

  CATEGORY_API_URL: `${CUSTOMER_API_URL}/category`,
};

export const ProductURL = {
  PRODUCT_API_URL: `${CUSTOMER_API_URL}/get-all-products`,

  GET_PRODUCT_BY_ID_API_URL: `${CUSTOMER_API_URL}/get-products-by-id`,

  GET_PRODUCT_BY_SEARCH_API_URL: `${CUSTOMER_API_URL}/search`,

  CATEGORY_API_URL: `${CUSTOMER_API_URL}/category`,
};

export const DrinkURL = {
  PRODUCT_DRINK_API_URL: `${CUSTOMER_API_URL}/get-all-drinks`,
};

export const BestURL = {
  PRODUCT_BEST_API_URL: `${CUSTOMER_API_URL}/get-best-sale`,
};

export const SpecialURL = {
  PRODUCT_SPECIAL_API_URL: `${CUSTOMER_API_URL}/get-all-products`,
};

export const CategoryURL = {
  CATEGORY_API_URL: `${CUSTOMER_API_URL}/category`,
};

export const DessertURL = {
  DESSERT_API_URL: `${CUSTOMER_API_URL}/get-all-dessert`,
};
