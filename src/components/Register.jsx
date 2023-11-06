import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="registration-container">
      <h1>
      <span style={{ color: '#FF9933' }}> KCF - </span>
        <span style={{ color: '#34AD54' }}>VIDEO</span>
      </h1>
      <h2>Registration</h2>
      <form action="/register" method="POST">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full_name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="role">Role:</label>
        <select id="role" name="role">
          <option value="admin">Admin</option>
          <option value="client">Client</option>
        </select>

        <input type="submit" value="Register" />
        <a href="/" className="btn-back-home">
          Back to Home
        </a>
      </form>
    </div>
  );
};

export default Register;
