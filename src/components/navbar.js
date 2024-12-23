import React from 'react';
import './HomePage.css';

const Navbar = () => {
    return (
       <header className="header">
                <div className="logo">
                    <img src="/path/to/logo.png" alt="Mood App Logo" />
                    <h1>MOODMOON</h1>
                </div>
                <div className="nav-buttons">
                    <button>Home</button>
                    <button>History</button>
                </div>
            </header>
    );
};

export default Navbar;