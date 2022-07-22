import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (responseData.isAuthenticated) {
      window.sessionStorage.setItem("auth", JSON.stringify(responseData));
      setIsAuth(true);
      navigate("/");
    }
  }, [responseData, navigate, setIsAuth]);

  const submitForm = () => {
    const data = { email, password };

    fetch("http://localhost:4000/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      });
  };

  return (
    <>
      <h1>Sign In</h1>
      {responseData.error && (
        <p style={{ color: "red" }}>{responseData.error}</p>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id=""
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id=""
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={submitForm}>Sign In</button>
      </div>
      <a href="signup">Sign Up</a>
    </>
  );
};

export default Login;