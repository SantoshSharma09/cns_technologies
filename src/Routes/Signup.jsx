import React, { useState } from "react";
import styles from "../Styles/Signup.module.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = (e) => {
    e.preventDefault();
    const render = { name, email, password };
    axios.post(`http://localhost:4500/users/signup`, render).then((res) => {
      console.log(res.data);
      if (res.data) {
        toast({
          title: "🦄 Signup Successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        toast({
          title: "🦄 Signup Failed.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  const handlePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className={styles.signup}>
      <div>
        <img
          src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/auth-v2-login-illustration-bordered-light.47ee3625.png"
          alt=""
        />
      </div>
      <div>
        <form className={styles.forms} onSubmit={handleSignup}>
          <h1>Welcome To Vuexy</h1>
          <p>Make your app management easy and fun!</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type={passwordType}
            placeholder="Enter Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.forgots}>
            <input type="checkbox" onClick={handlePassword} />
            <p>Show Password</p>
          </div>
          <button>Register</button>
        </form>
        <Link to="/login"><div className={styles.al}>
        <p>Already Have an Account?</p>
        <p>Sign in Instead</p>
        </div></Link>
      </div>
    </div>
  );
};

export default Signup;
