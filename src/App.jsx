// src/App.js
import React, { useEffect,useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './Components/Sidenav/Sidenav'; // Adjust path as needed
import DashboardPage from './Pages/AdminDashboard/AdminDashboard'; // Adjust path as needed
import UserDashbaord from './Pages/UserDashboard/UserDashboard';
import ProfilePage from './Pages/Profile/Profile';
import ProfileList from './Pages/ProfileList/ProfileList';
import ProfileForm from './Pages/ProfileForm/ProfileForm';
import UserManagement from './Pages/UserManagement/UserManagement';
import Inbox from './Pages/Inbox/Inbox';
import Testimonials from './Pages/Testimonials/Testimonials';
import Membership from './Pages/Membership/Membership';
import SentInterest from './Pages/SentInterest/SentInterest';
import ReceivedInterest from './Pages/ReceivedInterest/ReceivedInterest';
import Shortlisted from './Pages/Shortlisted/Shortlisted';
import LoginSignup from './Pages/LoginSignup/LoginSignup';

// Import Materialize CSS and JS
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

import './App.css';


function App() {
  useEffect(() => {
    // Initialize Materialize Sidenav for mobile responsiveness
    // This targets the global Materialize Sidenav behavior for smaller screens
    const elems = document.querySelectorAll('.sidenav');
    // Ensure you only initialize it once
    // M.Sidenav.getInstance(elems[0]) checks if an instance already exists
    if (elems.length > 0 && !M.Sidenav.getInstance(elems[0])) {
        M.Sidenav.init(elems);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const bypassLogin = true;

  // This is the function that needs to be passed down
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };


  return (
    <div className ="no-padding">
      {isLoggedIn || bypassLogin ? (
    
    <HashRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidenav />
        <main className="grey lighten-2 main-content-area p-4"> 
          <Routes>
            {/* ... your routes ... */}
            <Route path="/" element={<ProfilePage />} />
            <Route path="/admin_dashboard" element={<DashboardPage />} />
            <Route path="/user_dashboard" element={<UserDashbaord />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/search" element={<div>Search Page Content</div>} />
            <Route path="/recommended" element={<div>Recommended Page Content</div>} />
            <Route path="/shortlist" element={<Shortlisted />} />
            <Route path="/sent_interest" element={<SentInterest />} />
            <Route path="/received_interest" element={<ReceivedInterest />} />
            <Route path="/help" element={<div>Help Page Content</div>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile_list" element={<ProfileList />} />
            <Route path="/profile_form" element={<ProfileForm />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/dream" element={<div>Profile builder page content</div>} />
            <Route path="/settings" element={<div>Settings Page Content</div>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
      ):(
      // Otherwise, render the login page
        <LoginSignup onLogin={handleLogin} />
      )}
      </div>
  );
}

export default App;