import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email, password
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      console.log('Login successful');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  return (
    <div className="signupContainer" onSubmit={handleSubmit}>
      
      <input className="form-control" placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
      <input className="form-control" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)} />
      <button className="signupButton">Login</button>
    </div>
  );
}

export default Login;
