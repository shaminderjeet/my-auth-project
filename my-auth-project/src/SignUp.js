import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    if (responseData.isAuthenticated) {
      navigate("/login");
    }
  }, [responseData, navigate])

  const submitForm = () => {
    const data = { name, email, password };
    fetch("http://localhost:4000/user/sign-up", {
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
      <h1>Sign Up</h1>
      {responseData.error && (
        <p style={{ color: "red" }}>{responseData.error}</p>
      )}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
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

        <button onClick={submitForm}>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;