import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Login.view.js';
import Register from '../views/Register.view.js'
import Home from '../views/Home.view.js';
import ProtectedRoute from '../middleware/protectedRoute';


const AppRouter = () => {
    // 1:CLIENTE 2:EMPLEADO 3:ADMIN
  const rol = {
    cliente: 1,
    empleado: 2,
    admin: 3
  }
  return (
  <header className="App-header">
  <Router>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registrame" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
     {/*    <Route path="/home" element={<ProtectedRoute allowedRoles={[rol.cliente]} ><Home/></ProtectedRoute>} /> */}
    </Routes>
  </Router>
  </header>

  );
};

export default AppRouter;