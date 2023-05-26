import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404
      <Link to="/" className="btn btn-dark">
        volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
