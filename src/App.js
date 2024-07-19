// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import UserDashboard from './components/UserDashboard';
// import AdminDashboard from './components/AdminDashboard';
// import ManageUsersComponent from './components/ManageUsersComponent';
// import ManageOrganizationsComponent from './components/ManageOrganizationsComponent';
// import ManageApplicationsComponent from './components/ManageApplicationsComponent'
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/LoginForm" />} />
//         <Route path="/LoginForm" element={<LoginForm />} />
//         <Route path="/RegistrationForm" element={<RegistrationForm />} />
//         <Route path="/UserDashboard" element={<UserDashboard />} />
//         <Route path="/AdminDashboard" element={<AdminDashboard />} />
//         <Route path="/ManageUsersComponent" element={<ManageUsersComponent />} />
//         <Route path="/ManageOrganizationsComponent" element={<ManageOrganizationsComponent />} />
//         <Route path="/ManageApplicationsComponent" element={<ManageApplicationsComponent />} />
//       </Routes>
//     </Router>

//   );
// };




// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ManageUsersComponent from './components/ManageUsersComponent';
import ManageOrganizationsComponent from './components/ManageOrganizationsComponent';
import ManageApplicationsComponent from './components/ManageApplicationsComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginForm" />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/ManageUsersComponent" element={<ManageUsersComponent />} />
        <Route path="/ManageOrganizationsComponent" element={<ManageOrganizationsComponent />} />
        <Route path="/ManageApplicationsComponent" element={<ManageApplicationsComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

