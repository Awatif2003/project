import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './RegistrationForm.css'; // Import CSS file

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // New state for role, default to 'user'
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { username, password, fullName, email, role };

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setMessage('User registered successfully!');
      } else {
        setMessage('Failed to register user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Registration Form</h2>

      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label>Full Name:</label>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="user">user</option>
        <option value="staff">staff</option>
      </select>

      <button type="submit">Register</button>

      <p>{message}</p>

      <p>Don't have an account? <Link to='/LoginForm'>Back to Login</Link></p>
    </form>
  );
};

export default RegistrationForm;
