import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'; // Import Axios

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather user input from form fields
    const full_name = event.target.full_name.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const role = event.target.role.value;

    // Create a data object to send to the backend
    const userData = { full_name, email, username, password, role };

    // Send the data to the backend using an HTTP request (e.g., Axios)
    try {
      // Make an HTTP POST request to your backend API
      const response = await axios.post('/api/register', userData);

      // Handle the response, e.g., show success message or redirect
    } catch (error) {
      // Handle registration errors, e.g., display error messages
    }
  };

  return (
    <div className="registration-container">
      <h1>
        <span style={{ color: '#FF9933' }}> KCF - </span>
        <span style={{ color: '#34AD54' }}>VIDEO</span>
      </h1>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} method="POST">
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
