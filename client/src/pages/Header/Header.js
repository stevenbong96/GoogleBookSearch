import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container headerStyle">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search and Save Books of Your Own Choice</p>
            </div>
        </div>
    )
}

export default Header