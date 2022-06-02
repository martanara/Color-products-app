import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from '../src/components/Container/Container';
import ProductsList from '../src/components/ProductsList/ProductsList';

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route exact path="/" element={<ProductsList />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
