import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const from = location.state?.from?.pathname || "/";
  // user login system
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  // user loading state
  if (loading || googleLoading) {
    return <Loading></Loading>;
  }
  // if user in successfully login
  if (user || googleUser) {
    navigate(from, { replace: true });
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
              {googleError && (
                <span className="text-danger">{googleError.message}</span>
              )}
              <p>
                <Link to="/forgetpassword">forget Password</Link>
              </p>
              <input type="submit" value="login" />
            </form>
            <div className="social-area">
              <p>or login with</p>
              <div className="social-icon">
                <span onClick={() => signInWithGoogle()}>
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
