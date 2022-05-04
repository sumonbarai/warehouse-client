import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
  return (
    <div className="login-area">
      <div className="container">
        <div className="user">
          <div className="form-area">
            <h4>login</h4>
            <form>
              <input type="email" name="email" placeholder="Enter Email " />
              <input
                type="text"
                name="password"
                placeholder="Enter Password "
              />
              <p>
                <Link to="/forgetpassword">forget Password</Link>
              </p>
              <input type="submit" value="login" />
            </form>
            <div className="social-area">
              <p>or login with</p>
              <div className="social-icon">
                <span>
                  <AiFillGoogleCircle></AiFillGoogleCircle>
                </span>
              </div>
            </div>
            <div className="forward-user">
              <p>
                New User <Link to="/registration">create an account</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
