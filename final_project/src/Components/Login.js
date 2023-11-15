import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import NewAcc from 'NewAcc'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//HANDLELOGIN
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  //CREATE NEW ACC
     

      const data = await response.json();

      if (data.loggedIn) {
        // Redirect logic here (update state, navigate to another page, etc.)
        console.log('Login successful');
      } else {
        // Handle failed login (display error message, etc.)
        console.log('Login failed: ', data.message);
      }
    } catch (e) {
      console.e('Error during login:', e);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />

      <button type="button" onClick={handleLogin}>
        Login
      </button>

      <button > <Link to='/NewAcc'> Create a new account </Link> </button>
    </div>
  );
};

export default Login;
