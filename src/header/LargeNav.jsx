import React from "react";
import { Link } from "react-router-dom";

const LargeNav = () => {
    return (
        <div className="col-12 col-lg-8">
            <nav className="nav top-nav text-center">
                <Link to="/" className="nav-link top-nav-item link-info col-4 top-nav-link">Home</Link>
                <Link to="/about" className="nav-link top-nav-item link-info col-4 top-nav-link">About</Link>
                <Link to="/samples" className="nav-link top-nav-item link-info col-4 top-nav-link">Samples</Link>
            </nav>
        </div>
    )
};

export default LargeNav;