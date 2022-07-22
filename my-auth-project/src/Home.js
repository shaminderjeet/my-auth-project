import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ isAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <h1>Welcome!</h1>

      <div>
        <a href="login">Sign In</a>
        <a href="signup">Sign Up</a>
      </div>
    </>
  );
};

export default Home;

