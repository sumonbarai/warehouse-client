import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // user login system
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  // user loading state
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  // if user in successfully login
  if (user) {
    navigate("/home");
  }
  return (
    <div className="login-area">
      <div className="container">
        <div className="user">
          <div className="form-area">
            <h4>login</h4>
            <form onSubmit={handleLogin}>
              <input type="email" name="email" placeholder="Enter Email " />
              <input
                type="password"
                name="password"
                placeholder="Enter Password "
              />
              {error && <span className="text-danger">{error.message}</span>}
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
