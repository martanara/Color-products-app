import { PER_PAGE_DEFAULT, PAGE_DEFAULT } from '../constants';

const initialState = {
  products: {
    products: [],
    perPage: PER_PAGE_DEFAULT,
    totalPages: PAGE_DEFAULT,
    page: 1
  }
};

export default initialState;
