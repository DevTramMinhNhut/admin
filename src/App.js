import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/dark.css";
import React, { useState } from 'react';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { categoryInputs } from './formSource';
import { categoryTitle, productTitle } from './titleSource';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Widget from './components/widget/Widget';
import Featured from './components/featured/Featured';
import Chart from './components/chart/Chart';
import Tableadmin from './components/tableadmin/Tableadmin';
import Users from './pages/users/Users';


function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Sidebar />
      <div className="app-container">
        <Navbar />
        <Outlet />
      </div>
    </div >
  );
}

export default App;


{/* <Route path="/">
            <Route index element={<Home setDark={setDark} />} />
            <Route path="login" element={<Login setDark={setDark} />} />
            <Route path="list" >
              <Route path="users" >
                <Route index element={<List label={categoryTitle} name="user" title="List User" />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New title="Add New User" />} />
              </Route>
              <Route path="products" element={<Products />}>
                <Route index element={<List label={productTitle} name="products" title="List product" />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New title="Add New Product" />} />
              </Route>
              <Route path="categories" element={<Categories />}>
                <Route index element={<List label={categoryTitle} name="categories" title="List category" />} />
                <Route path=":categoryID" element={<Single />} />
                <Route path="new" element={<New inputs={categoryInputs} title="Add New Category" />} />
              </Route>
            </Route>
            <Route path="products" >
              <Route index element={<List label={productTitle} name="products" title="List product" />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New  title="Add New Product" />} />
            </Route>
            <Route path="categories" >
              <Route index element={<List label={categoryTitle} name="categories" title="List category" />} />
              <Route path=":categoryID" element={<Single />} />
              <Route path="new" element={<New inputs={categoryInputs} title="Add New Category" />} />
            </Route>
          </Route> */}
