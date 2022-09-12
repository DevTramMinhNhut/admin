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

        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);
