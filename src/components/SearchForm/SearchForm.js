import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledTextField } from './SearchForm.styles';

import { fetchProductsRequest } from '../../redux/productsRedux';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('id') || '');
  const dispatch = useDispatch();

  return (
    <StyledTextField
      type="number"
      placeholder="Search by Id"
      value={search}
      onChange={(event) => {
        const searchString = parseInt(event.target.value);

        if (!Number.isInteger(searchString)) {
          setSearch('');
          setSearchParams('');
        } else {
          setSearch(searchString);
          setSearchParams({ id: searchString });
        }

        dispatch(fetchProductsRequest());
      }}
    />
  );
}

export default SearchForm;

