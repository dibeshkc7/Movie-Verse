import React from "react";
import Sidebar from "../side-bar";
import { Outlet } from "react-router-dom";
import Header from "../header";

const AuthLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Sidebar />
      <div className="ml-20 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
