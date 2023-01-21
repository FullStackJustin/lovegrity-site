import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

