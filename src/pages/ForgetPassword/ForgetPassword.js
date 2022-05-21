import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const ForgetPassword = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const handleForgetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("please check email for password reset link");
    event.target.reset();
  };

  return (
    <div className="login-area">
      <div className="container">
        <div className="user">
          <div className="form-area">
            <h4>Forget Password</h4>
            <form onSubmit={handleForgetPassword}>
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
