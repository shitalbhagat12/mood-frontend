import React, { useState, useEffect } from "react";
import axios from "axios";
import MoodForm from "./MoodForm";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [moods, setMoods] = useState([]);

    // Fetch moods from the backend
    const fetchMoods = async () => {
        try {
            const response = await axios.get("http://localhost:8080");
            setMoods(response.data);
        } catch (error) {
            console.error("Error fetching moods:", error);
        }
    };

    useEffect(() => {
        fetchMoods();
    }, []);

    // Add a new mood
    const addMood = async (mood) => {
        try {
            const response = await axios.post("http://localhost:8080", mood);
            setMoods([...moods, response.data]);
        } catch (error) {
            console.error("Error adding mood:", error);
        }
    };


    // Get the latest mood
    const latestMood = moods.length > 0 ? moods[moods.length - 1] : null;

    return (
        <div>
            <h1>Dashboard</h1>
            <MoodForm onAddMood={addMood} />
            <div>
                <h2>Latest Mood</h2>
                {latestMood ? (
                    <ul>
                        <li key={latestMood._id}>
                            <h3>Mood: {latestMood.mood}</h3>
                            <p>Message: {latestMood.message}</p>
                            <p>Date: {new Date(latestMood.date).toLocaleString()}</p>
                            <h4>Suggestions:</h4>
                            <ul>
                                {latestMood.suggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                ) : (
                    <p>No mood to display</p>
                )}
            </div>
            <Link to="/history">
                <button>View Mood History</button>
            </Link>
        </div>
    );
};

export default Dashboard;
