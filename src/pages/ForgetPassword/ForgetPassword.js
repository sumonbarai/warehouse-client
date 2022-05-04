import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="login-area">
      <div className="container">
        <div className="user">
          <div className="form-area">
            <h4>Forget Password</h4>
            <form>
              <input type="email" name="email" placeholder="Enter Email " />
              <input type="submit" value="Forget Password" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
