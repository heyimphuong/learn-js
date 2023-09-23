import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/home';
import { ProductsPage } from './pages/products';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {window.location.pathname == '/' && <HomePage />}
    {window.location.pathname == '/products' && <ProductsPage />}
  </React.StrictMode>
);
