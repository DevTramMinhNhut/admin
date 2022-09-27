import "bootstrap/dist/css/bootstrap.min.css";
import "./style/dark.css";
import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Sidebar />
      <div className="app-container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;