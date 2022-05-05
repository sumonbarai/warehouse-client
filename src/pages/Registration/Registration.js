import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Registration = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [customError, setCustomError] = useState("");
  const [updateProfile] = useUpdateProfile(auth);

  // user registration process
  const handleRegistration = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const ConfirmPassword = event.target.ConfirmPassword.value;
    if (password === ConfirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: displayName });
    } else {
      setCustomError("password does not match");
    }
    event.target.reset();
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
  // if user successfully registration
  if (user) {
    navigate("/home");
  }

  return (
    <div className="login-area">
      <div className="container">
        <div className="user">
          <div className="form-area">
            <h4>Registration</h4>
            <form onSubmit={handleRegistration}>
              <input type="text" name="name" placeholder="Enter Full name " />
              <input type="email" name="email" placeholder="Enter Email " />
              <input
                type="password"
                name="password"
                placeholder="Enter Password "
              />
              <input
                type="password"
                name="ConfirmPassword"
                placeholder="Enter Confirm Password "
              />
              {customError && (
                <span className="text-danger">{customError}</span>
              )}
              {error && <span className="text-danger">{error.message}</span>}
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
