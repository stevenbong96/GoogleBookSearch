import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">Google Books</a> */}
                <Link to="/">Google Books</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">
                            <Link to="/search">Search</Link> <span className="sr-only">(current)</span></a>
                        {/* <Link to="/search">Search</Link> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link to="/saved">Saved</Link></a>
                        {/* <Link to="/saved">Saved</Link> */}
                    </li>
                </ul>
            </div>
        </nav>
        // <div>
        //     <Link to="/">Google Books</Link>
        //     <Link to="/search">Search</Link>
        //     <Link to="/saved">Saved</Link>
        // </div>
    )
}

export default Navbar