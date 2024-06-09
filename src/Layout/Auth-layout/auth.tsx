import React from "react";
import Sidebar from "../side-bar";
import { Outlet } from "react-router-dom";
import Header from "../header";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;