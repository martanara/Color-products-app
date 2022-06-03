import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import {
  PaginationItem,
  Stack
} from '@mui/material';
import { ArrowForward, ArrowBack }  from '@mui/icons-material';

import { fetchProductsRequest } from '../../redux/productsRedux';

import { StyledPagination } from './Pagination.styles';

const Pagination = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(props.page);

  const dispatch = useDispatch();

  useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  return (
    <Stack spacing={2}>
      <StyledPagination
        page={page}
        count={props.totalPages}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{ previous: ArrowBack, next: ArrowForward }}
          />
        )}
        onChange={(event, page) => {
          setSearchParams({
            ...searchParams,
            page
          });
          setPage(page);
          dispatch(fetchProductsRequest()); // how do we push the page info?
        }}
      />
    </Stack>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Pagination;
