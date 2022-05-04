import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="login-area">
      <div className="container">
        <div className="user">
          <div className="form-area">
            <h4>Registration</h4>
            <form>
              <input type="text" name="name" placeholder="Enter Full name " />
              <input type="email" name="email" placeholder="Enter Email " />
              <input
                type="text"
                name="password"
                placeholder="Enter Password "
              />
              <input
                type="text"
                name="Confirm password"
                placeholder="Enter Confirm Password "
              />

              <input type="submit" value="Registration" />
            </form>
            <div className="social-area">
              <p>or Registration with</p>
              <div className="social-icon">
                <span>
                  <AiFillGoogleCircle></AiFillGoogleCircle>
                </span>
              </div>
            </div>
            <div className="forward-user">
              <p>
                All ready Have account <Link to="/login">Login</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
