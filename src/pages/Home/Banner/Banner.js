import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-area d-lg-flex justify-content-center align-items-center">
      <div className="banner-text">
        <h1>Inventory management software for growing Businesses.</h1>
        <Link to="/login">
          <button className="custom-btn">Login</button>
        </Link>
        <Link to="/registration">
          <button className="custom-btn">Sign Up - It's Free.</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
