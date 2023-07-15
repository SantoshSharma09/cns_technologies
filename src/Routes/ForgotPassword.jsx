import React from "react";
import styles from '../Styles/ForgotPassword.module.css'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/auth-v2-forgot-password-illustration-light.1ef614ab.png"
          alt=""
        />
      </div>
      <div>
        <form action="">
            <h2>Forgot Password?</h2>
            <p>Enter your email and we'll send you instructions to reset your password</p>
            <input type="text" placeholder="Email*"/>
            <button>SEND RESET LINK</button>
            <Link to="/login"><p className={styles.back}>Back To Login</p></Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
