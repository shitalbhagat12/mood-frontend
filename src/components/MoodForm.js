import React, { useState } from "react";

const MoodForm = ({ onAddMood }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMood = {
      message,
      date: new Date().toISOString(),
    };
    onAddMood(newMood);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Your Mood</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="How are you feeling?"
        required
      ></textarea>
      <button type="submit">Add Mood</button>
    </form>
  );
};

export default MoodForm;
