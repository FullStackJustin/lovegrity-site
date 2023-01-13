import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import ContactPg from './pages/contact';
import AboutPg from './pages/about';
import Services from './pages/services';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<ContactPg/>}></Route>
        <Route path="/about" element={<AboutPg/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
