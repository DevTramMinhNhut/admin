import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/dark.css";
import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { categoryInputs } from './formSource';
import { categoryTitle, productTitle } from './titleSource';
function App() {
  const [dark, setDark] = useState(false);   

  return (
  <div className={dark ? "App dark" : "App"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home setDark={setDark}/>} />
          <Route path="login" element={<Login setDark={setDark}/>} />
            <Route path="users" >
              <Route index element={<List label={categoryTitle}  name="user" title="List User" />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New  title="Add New User" />} />
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
        </Route>
      </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;
