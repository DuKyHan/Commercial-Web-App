import React from "react";
import backgroundVideo from "../img/file.mp4";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { CartState } from "../context/Context";
import { useHistory } from "react-router-dom";
function Login() {
  const { userState, userDispatch } = CartState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/user/login", data).then((req) => {
      if (req.data.error) alert(req.data.error);
      else {
        userDispatch({
          type: "LOGIN",
        });
        history.push("/home");
        console.log(userState);
      }
    });
  };
  return (
    <div className="loginContainer">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="loginBox">
        <label>Username</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={() => login()}>Login</button>
      </div>
    </div>
  );
}

export default Login;
