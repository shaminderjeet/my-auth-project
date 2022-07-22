import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const data = { email, password };
    return fetch('http://localhost:4000/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(data => data.json())
      }
          
    const submitForm = async (e) => {
      e.preventDefault();
      const response = await signIn({
        email,
        password,
      });
      if (response.isAuthenticated) {
        alert (`you have signed in succesfully`);
      } else {
        alert (`can not sign in, please try again`);
    }};


  return (
    <>
      <h1>Sign In</h1>

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
      <h2><a href="/">Home</a></h2>
      <h2><a href="signup">Sign Up</a></h2>
    </>
  );
};

export default Login;