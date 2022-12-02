import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Categories from "./pages/categories/Categories";
import UpdateCategory from "./pages/categories/UpdateCategory";
import CreateCategory from "./pages/categories/CreateCategory";

import Home from "./pages/home/Home";
import Order from "./pages/orders/Orders";
import DetailOrder from "./pages/orders/DetailOrder";

import NewOrder from "./pages/newOrder/NewOrder";

//login
import Login from "./pages/login/Login";

//products
import Products from "./pages/products/Products";
import CreateProduct from "./pages/products/CreateProduct";
import UpdateProduct from "./pages/products/UpdateProduct";
import DetailProduct from "./pages/products/DetailProduct";

//discounts
import Discounts from "./pages/discounts/Discount";
import CreateDiscount from "./pages/discounts/CreateDiscount";
import UpdateDiscount from "./pages/discounts/UpdateDiscount";
// import DetailProduct from './pages/products/DetailProduct';

//customer
import Customer from "./pages/customer/Customer";
import DetailCustomer from "./pages/customer/DetailCustomer";

//staff
import Staff from "./pages/staff/Staff";
import UpdateStaff from "./pages/staff/UpdateStaff";
import CreateStaff from "./pages/staff/CreateStaff";

import PrivateRoutes from "./utils/PrivateRoutes";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeContextProvider >
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />

            <Route path="/order" element={<Order />} />
            <Route
              path="/order/detail-order/:order_id"
              element={<DetailOrder />}
            />

            <Route path="/categories" element={<Categories />} />
            <Route
              path="/categories/create-category"
              element={<CreateCategory />}
            />
            <Route
              path="/categories/update-category/:category_id"
              element={<UpdateCategory />}
            />

            <Route path="/products" element={<Products />} />
            <Route
              path="/products/create-product"
              element={<CreateProduct />}
            />
            <Route
              path="/products/detailProduct/:product_id"
              element={<DetailProduct />}
            />
            <Route
              path="/products/update-product/:product_id"
              element={<UpdateProduct />}
            />

            <Route path="/staff" element={<Staff />} />
            <Route
              path="/staff/update-staff/:staff_id"
              element={<UpdateStaff />}
            />
            <Route path="/staff/createStaff/" element={<CreateStaff />} />

            <Route path="/customer" element={<Customer />} />
            <Route
              path="/customer/customerDetail/:customer_id"
              element={<DetailCustomer />}
            />

            <Route path="/discounts" element={<Discounts />} />
            <Route
              path="/discounts/createDiscount/:product_id"
              element={<CreateDiscount />}
            />
            <Route
              path="/discounts/updateDiscount/:discount_id"
              element={<UpdateDiscount />}
            />
          </Route>
        </Route>

        <Route path="/login">
          <Route index element={<Login />}></Route>
        </Route>
        {/* admin order or staff order */}
        <Route element={<PrivateRoutes />}>
          <Route path="/new-oder">
            <Route index element={<NewOrder />}></Route>
          </Route>
        </Route>
      </Routes>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
