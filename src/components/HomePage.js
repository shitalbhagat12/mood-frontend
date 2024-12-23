import React from 'react';
import './HomePage.css'; // Make sure to create and style this CSS file
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    // Add a click event handler to the button
    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <>
        <Navbar/>
        <div className="homepage">
            
            <main className="main-content">
                <div className="description">
                    <h2>Mood Traking</h2>
                    <p>A life-changing personal approach to your <br></br>mental well-being. Calm you body and <br></br>mind with personalized plan.</p>
                    <button onClick={handleLogin} >Login</button>
                </div>
                <div className="gif" id="g">
                    <img src="https://media3.giphy.com/media/AvcTydRmVU2aI1PwDE/giphy.gif?cid=6c09b952c6040067lodzmbipnmsto2sb1ppfkzr89jm0xyek&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="Mood Tracking GIF" />
                </div>
            </main>
        </div>

        </>
    );
};

export default HomePage;