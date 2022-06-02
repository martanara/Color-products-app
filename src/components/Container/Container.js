import React from 'react';

import { Wrapper } from './Container.styles';

const ProductsList = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default ProductsList;
