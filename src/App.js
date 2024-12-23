import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
};

export default App;


//add client/src/components/HomePage.js