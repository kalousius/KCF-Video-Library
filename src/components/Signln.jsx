import React, { useState } from 'react';
import './Signln.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here (e.g., send a request to the server).
  };

  return (
    <div className="login-container">
      <h1 className="m-0 display-4 text-primary">
        <span style={{ color: '#FF9933' }}> KCF - </span>
        <span style={{ color: '#34AD54' }}>VIDEO</span>
      </h1>
      <h2>Login</h2>
      <form action="/login" method="POST">
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Login" />

        <a href="/" className="btn-back-home">
          Back to Home
        </a>

        <a href="/register" className="btn-register">
          Register
        </a>
      </form>
    </div>
  );
};

export default SignIn;
