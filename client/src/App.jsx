// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Directory from './pages/Directory';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="w-screen h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
