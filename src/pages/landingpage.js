import React from "react";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <div>
      You are on landing page
      <hr />
      <br />
      <h3>PUBLIC</h3>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/unauthorized">
        <button>UnAuthorize User</button>
      </Link>
      <br />
      <br />
      <h3>PRIVATE</h3>
      <Link to="/admin">
        <button>ADMIN</button>
      </Link>
      <Link to="/user">
        <button>Authorized User</button>
      </Link>
    </div>
  );
};

export default Landingpage;
