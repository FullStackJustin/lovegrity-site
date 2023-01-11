import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import ContactPg from './pages/contact';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<ContactPg/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
