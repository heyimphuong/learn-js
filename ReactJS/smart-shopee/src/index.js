import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/products';
import './app_compiled.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="p-8 border rounded-2xl w-full max-w-2xl mx-auto mt-8 ">
      {window.location.pathname == '/' && <HomePage />}
      {window.location.pathname == '/products' && < ProductsPage />}
    </div>
  </React.StrictMode>
);
