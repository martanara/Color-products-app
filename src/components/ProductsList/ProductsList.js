import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  Table, 
  TableBody,
  TableHead
} from '@mui/material';

import { 
  StyledTableRow,
  StyledTableCell
 } from './ProductList.styles';

import { fetchProductsRequest, getAllProducts } from '../../redux/productsRedux';

import Pagination from '../Pagination/Pagination';
import SearchForm from '../SearchForm/SearchForm';

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const productsInfo = useSelector(state => getAllProducts(state));
  const { products, totalPages, page } = productsInfo;

  return (
    <section>
      <h1>Products List</h1>
      <SearchForm />
      {
        products.length ? (
          <Table>
            <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Year</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
            {
              products.map(product => (
                <StyledTableRow key={product.id} backgroundColor={product.color}>
                  <StyledTableCell>{product.id}</StyledTableCell>
                  <StyledTableCell>{product.name}</StyledTableCell>
                  <StyledTableCell>{product.year}</StyledTableCell>
                </StyledTableRow>
              ))
            }
            </TableBody>
          </Table>
        ) : (
          <div>
            No results
          </div>
        )
      }
      {
        totalPages ? (
          <Pagination
            totalPages={totalPages}
            page={page}
          />
        ) : null
      }
    </section>
  );
};

export default ProductsList;
