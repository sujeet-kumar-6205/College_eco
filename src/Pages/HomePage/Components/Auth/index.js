import React, { useState } from "react";
import "./styles.css";
import Login from "./Login";
import SignUp from "./Signup";

function AuthService() {
  const [authState, setAuthState] = useState("signup");
  return (
    <div className="authContainer">
      <div className="modalLeft">
        <h3>Why Sign up?</h3>
        <ul>
          <li>Exclusive deals</li> <li>More Savings</li> <li>Over 50 Stores</li>{" "}
          <li>Over 100 Categories</li>
        </ul>
      </div>
      <div className="modalRight">
        <div className="signupTab">
          <div className="headings" onClick={() => setAuthState("login")}>
            LOGIN
          </div>
          <span className="seperator">|</span>
          <div className="headings" onClick={() => setAuthState("signup")}>
            SIGNUP
          </div>
        </div>
        {authState === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}

export default AuthService;
