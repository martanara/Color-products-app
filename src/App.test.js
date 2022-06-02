import React from 'react';

import { createRoot } from 'react-dom/client';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App';

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  root.unmount();
});
