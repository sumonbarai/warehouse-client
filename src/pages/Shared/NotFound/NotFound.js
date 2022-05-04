import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="error-text">
        Opps ! <br /> 404 <br /> ERROR... PAGE NOT FOUND
      </div>
      <Link to="/home">go to home page</Link>
    </div>
  );
};

export default NotFound;
