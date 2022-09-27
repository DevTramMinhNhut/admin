import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Categories from './pages/categories/Categories';
import UpdateCategory from './pages/categories/UpdateCategory';
import CreateCategory from './pages/categories/CreateCategory';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import CreateUser from './pages/users/CreateUser';
import UpdateUser from './pages/users/UpdateUser';
import Users from './pages/users/Users';

//products
import CreateProduct from './pages/products/CreateProduct';
import UpdateProduct from './pages/products/UpdateProduct';
import DetailProduct from './pages/products/DetailProduct';

//customer
import Customer from './pages/customer/Customer';
import DetailCustomer from './pages/customer/DetailCustomer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/create-user" element={<CreateUser />} />
          <Route path="/users/update-user/:user_id" element={<UpdateUser />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create-category" element={<CreateCategory />} />
          <Route path="/categories/update-category/:category_id" element={<UpdateCategory />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/create-product" element={<CreateProduct />} />
          <Route path="/products/detailProduct/:product_id" element={<DetailProduct />} />
          <Route path="/products/update-product/:product_id" element={<UpdateProduct />} />

          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/customerDetail/:customer_id" element={<DetailCustomer />} />

        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);
