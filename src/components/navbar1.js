import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    const handleSignup = () => {
        navigate("/signup");
    };

    return (
       <header className="header">
                <div className="logo">
                    <img src="logo1.png" alt="Mood App Logo" />
                    <h1>MOODMOON</h1>
                </div>
                <div className="nav-buttons">
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignup}>Sign Up</button>
                </div>
            </header>
    );
};

export default Navbar;