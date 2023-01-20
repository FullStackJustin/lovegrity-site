import React from 'react'
import App from './App';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useState } from 'react';

const ParentComponent = () => {

    const [loggedIn, setLoggedIn] = useState()
    const handleLoggedIn = (newState) => {
        setLoggedIn(newState)
    }


    return (
        <React.StrictMode>
            <Navbar loggedIn={loggedIn} handleLoggedIn={handleLoggedIn} />
            <App loggedIn={loggedIn} handleLoggedIn={handleLoggedIn}/>
            <Footer />
        </React.StrictMode>
    )
}

export default ParentComponent;