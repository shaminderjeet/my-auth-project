import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function signUp() {
    const data = { name, email, password };
    return fetch('http://localhost:4000/user/sign-up', {
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
      const response = await signUp({
        name,
        email,
        password,
      });
      if (response.isAuthenticated) {
        alert (`you have signed up succesfully`);
      } else {
        alert (`this user is already exist`);
    }};
  
  return (
    <>
      <h1>Sign Up</h1>

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
      <h2><a href="login">Sign In</a></h2>
    </>
  );
};

export default SignUp;