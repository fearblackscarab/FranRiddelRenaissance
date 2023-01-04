import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";

const LargeNav = () => {
    return (
        <div className="col-12 col-lg-8">
            <nav className="nav top-nav text-center">
                <Link to="/" className="nav-link top-nav-item link-info col-4">Home</Link>
                <Link to="/about" className="nav-link top-nav-item link-info col-4">About</Link>
                <Link to="/contact" className="nav-link top-nav-item link-info col-4">Contact</Link>
            </nav>
        </div>
    )
};

export default LargeNav;