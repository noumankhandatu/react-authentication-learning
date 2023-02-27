import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = () => {
  const token = useSelector((state) => state.counter);

  const location = useLocation();
  return (
    <div>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default RequireAuth;

// for admin and user we wil ldo

// {token && email === admin ? (
//   <Outlet />
// ) : (
//   <Navigate to="/login" state={{ from: location }} replace />
// )}
