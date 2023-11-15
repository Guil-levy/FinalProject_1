import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewAcc() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
          <div>
      <h2>Register</h2>
      <label htmlFor="username">Choose a user name:</label>
      <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Choose a Password:</label>
      <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />

      <button type="button">
        Register
      </button>
      <button ><Link to='/Login'> Back to login page </Link></button>
    </div>
    </div>
  )
}

export default NewAcc
