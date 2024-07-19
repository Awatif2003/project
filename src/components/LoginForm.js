// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// import { authenticateUser } from '../authService';// Correct import path
// import './LoginForm.css';

// const LoginComponent = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await authenticateUser({ username, password });
//       const { role } = response.data; // Assuming the API returns the user role
//       if (role === 'staff') {
//         navigate('/AdminDashboard');
//       } else if (role === 'user') {
//         navigate('/UserDashboard');
//       } else {
//         setError('Unknown user role');
//       }
//     } catch (error) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/RegistrationForm">Register here</Link>
//         </p>
//         {error && <p className="error-message">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default LoginComponent;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Add Link import
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/users/login', { username, password });
            const { role } = response.data;
            if (role === 'staff') {
                navigate('/AdminDashboard');
            } else if (role === 'user') {
                navigate('/UserDashboard');
            } else {
                setError('Unknown user role');
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/RegistrationForm">Register here</Link>
                </p>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default LoginForm;
