import axios from 'axios';

import { PER_PAGE_DEFAULT, PAGE_DEFAULT, ERROR_TYPE_NOT_FOUND } from '../constants';

import { convertObjectToArray } from '../utils/convertObjectToArray';

//selectors
export const getAllProducts = state => state.products;

// action names
const createActionName = name => `app/products/${name}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');
const PRODUCTS_NO_ID = createActionName('PRODUCTS_NO_ID');

// action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });
export const productsNoId = () => ({ type: PRODUCTS_NO_ID });

export const fetchProductsRequest = (perPage = PER_PAGE_DEFAULT) => (dispatch) => {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page')) || PAGE_DEFAULT;
  const id = parseInt(params.get('id'));

  axios(`https://reqres.in/api/products?page=${page}&per_page=${perPage}${id ? `&id=${id}` : '' }`)
  .then((response) => {
    const data = convertObjectToArray(response.data.data);

    dispatch(
      updateProducts({
        data,
        perPage: response.data.per_page,
        totalPages: response.data.total_pages,
        page: response.data.page
      })
    );
  })
  .catch((error) => {
    if (error.response.status === ERROR_TYPE_NOT_FOUND) {
      dispatch(productsNoId());
    } else {
      throw new Error(error);
    }
  });
};

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      const { data, perPage, totalPages, page } = action.payload;

      return {
        ...state,
        products: data,
        perPage,
        totalPages,
        page
      };
    }

    case PRODUCTS_NO_ID: {
      return {
        ...state,
        products: [],
        perPage: PER_PAGE_DEFAULT,
        totalPages: null,
        page: PAGE_DEFAULT
      };
    }

    default:
      return state;
  }
};

export default productsReducer;





