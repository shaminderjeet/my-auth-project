import React, { useState } from "react";
import Home from "./Home";
const Database = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
  {
    username: "user3",
    password: "pass3",
  },
];


const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null)
    let { username, password } = event.target;
    const userData = Database.find((user) => user.username === username.value);
    console.log(userData);

    if (!userData) {
      setErrorMessage("username doesn't match");
      return;
    }
    if (userData.password !== password.value) {
      setErrorMessage("Password doesn't match");
    } else {
      setSubmitted(true);
    }

  };
 
if(!isSubmitted)
return (
    <div>
      <h1>Login</h1>

      {errorMessage && <p>{errorMessage} </p>}
      <form onSubmit={handleSubmit} >
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Your Name "
        />
        <br></br>
        
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password "
        />
        <br></br>
      
        <button type="Submit">LogIn</button>
      </form>
    </div>
  );
  else{
    return <Home/>
  }
};

export default Login;
