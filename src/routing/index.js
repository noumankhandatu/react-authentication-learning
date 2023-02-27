import React from "react";
import SignIn from "../pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../hooks/authLayout";
import UnAuthorize from "../pages/UnAuthorize";
import Admin from "../pages/Admin";
import User from "../pages/User";
import Landingpage from "../pages/landingpage";
import RequireAuth from "../hooks/requireAuth";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {/* public routes */}
          <Route path="" element={<Landingpage />} />
          <Route path="login" element={<SignIn />} />
          <Route path="unauthorized" element={<UnAuthorize />} />
          {/* protected routes */}
          <Route  element={<RequireAuth />}>
            <Route path="admin" element={<Admin />} />
            <Route path="user" element={<User />} />
          </Route>

          {/* default route */}
          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
