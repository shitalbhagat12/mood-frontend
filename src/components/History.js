import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
    const [moods, setMoods] = useState([]);

    // Fetch all moods from the backend
    const fetchMoods = async () => {
        try {
            const response = await axios.get("http://localhost:8080");
            setMoods(response.data);
        } catch (error) {
            console.error("Error fetching moods:", error);
        }
    };

    // Delete a mood
    const deleteMood = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/${id}`);
            setMoods(moods.filter((mood) => mood._id !== id));
        } catch (error) {
            console.error("Error deleting mood:", error);
        }
    };

    useEffect(() => {
        fetchMoods();
    }, []);

    return (
        <div>
            <h1>Mood History</h1>
            {moods.length > 0 ? (
                <ul>
                    {moods.map((mood) => (
                        <li key={mood._id}>
                            <h3>Mood: {mood.mood}</h3>
                            <p>Message: {mood.message}</p>
                            <p>Date: {new Date(mood.date).toLocaleString()}</p>
                            <h4>Suggestions:</h4>
                            <ul>
                                {mood.suggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                            <button onClick={() => deleteMood(mood._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No moods available.</p>
            )}
        </div>
    );
};

export default History;
