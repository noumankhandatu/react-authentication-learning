import React from "react";
import { Outlet } from "react-router-dom"; //all the childrens are represented as outlet matlb outlet childrens ko leta hai jaise props mai {children lekhte thy}}

const AuthLayout = () => {
  return (
    <div>
      header is here
      <Outlet />
      footer is here
    </div>
  );
};

export default AuthLayout;
