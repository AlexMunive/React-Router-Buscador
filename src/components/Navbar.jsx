import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">
          contacto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">
          blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
