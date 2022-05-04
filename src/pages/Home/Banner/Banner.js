import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-area d-lg-flex justify-content-center align-items-center">
      <div className="banner-text">
        <h1>Inventory management software for growing businesses.</h1>
        <Link to="inventory">
          <button className="custom-btn">go to inventory</button>
        </Link>
        <Link to="login">
          <button className="custom-btn">sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
