import React from "react";
import backgroundVideo from "../img/file.mp4";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
function Registration() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    const data = { username: username, password: password, email: email };
    axios.post("http://localhost:3001/user/register", data).then((res) => {
      if (res.data.error) {
        alert("Not successfully");
      } else {
        history.push("/");
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
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={() => onSubmit()}>Login</button>
      </div>
    </div>
  );
}

export default Registration;
