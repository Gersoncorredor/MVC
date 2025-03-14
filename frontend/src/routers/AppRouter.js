import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Login.view.js';
import Home from '../views/Home.view.js';

// 1:CLIENTE 2:EMPLEADO 3:ADMIN
import ProtectedRoute from '../middleware/protectedRoute';
   
   const AppRouter = () => {
  return (

    <header className="App-header">
  <Router>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<ProtectedRoute allowedRoles={[3]}><Home/></ProtectedRoute>} />
    </Routes>
  </Router>
    </header>

  );
};

export default AppRouter;