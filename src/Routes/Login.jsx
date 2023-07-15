import React, { useState } from "react";
import styles from "../Styles/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const render = { email, password };
    axios.post(`http://localhost:4500/users/login`, render).then((res) => {
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token))
      if (res.data.token) {
        toast({
          title: "🦄 Login Successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          title: "🦄 Login Failed.",
          status: "error",
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
        <form className={styles.forms} onSubmit={handleLogin}>
          <h1>Welcome To Vuexy Login</h1>
          <p>Make your app management easy and fun!</p>
          <input
            type="text"
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
          <div className={styles.forgot}>
            <div>
              <input type="checkbox" onClick={handlePassword} />
              <p>Show Password</p>
            </div>
            <Link to="/forgot_password">
              <p>Forgot Password</p>
            </Link>
          </div>
          <button>Login</button>
        </form>
        <Link to="/register">
          <div className={styles.al}>
            <p>New on Our Platform?</p>
            <p>Create an Account</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
