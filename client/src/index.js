import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
    <Router>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

