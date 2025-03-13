import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Login.view.js';


const AppRouter = () => {
  return (

    <header className="App-header">
  <Router>
    <Routes>
        <Route path="/" element={<Login/>}/>
    </Routes>
  </Router>
    </header>

  );
};

export default AppRouter;