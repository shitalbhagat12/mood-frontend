import React from "react";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import MoodForm from "./MoodForm";
import MoodList from "./MoodList";
import './FirstPage.css';

function FirstPage(){

    return(
        <div className="firstPage">
            <HomePage />
            <Dashboard />
            <MoodForm />
            <MoodList />
        </div>
    )

}

export default FirstPage