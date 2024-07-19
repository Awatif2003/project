import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import CSS file

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const showUserAlert = () => {
    const username = prompt("Enter Username:");
    if (username === null || username.trim() === "") {
      alert("Username is required.");
      return;
    }

    const fullname = prompt("Enter Fullname:");
    if (fullname === null || fullname.trim() === "") {
      alert("Fullname is required.");
      return;
    }

    const password = prompt("Enter Password:");
    if (password === null || password.trim() === "") {
      alert("Password is required.");
      return;
    }

    const email = prompt("Enter Email:");
    if (email === null  ) {
      alert("A valid email is required.");
      return;
    }

    const role = prompt("Enter Role:");
    if (role === null || role.trim() === "") {
      alert("Role is required.");
      return;
    }

    const userData = {
      username: username,
      fullname: fullname,
      password: password,
      email: email,
      role: role
    };

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        alert("User added successfully:\n" + JSON.stringify(data));
        setUsers(prevUsers => [...prevUsers, data]);
      })
      .catch(error => {
        alert("There was a problem adding the user: " + error.message);
      });
  };

  const deleteUser = (userId) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      })
      .catch(error => {
        alert('There was a problem deleting the user: ' + error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/ManageOrganizationsComponent">Manage Organizations</Link>
          </li>
          <li>
            <Link to="/ManageApplicationsComponent">Manage Applications</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Admin Dashboard</h1>
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Users</h2>
            <button className="button" onClick={showUserAlert}>Add New User</button>
          </div>
          <div className="panel-content">
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="button">Edit</button>
                        <button className="button" onClick={() => deleteUser(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
