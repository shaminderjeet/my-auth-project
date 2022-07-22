import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    const authData = JSON.parse(window.sessionStorage.getItem("auth"));
    if (authData && authData.isAuthenticated) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [setIsAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;