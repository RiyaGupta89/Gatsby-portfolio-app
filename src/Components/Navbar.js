import React from 'react'
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <div>
            <div className="logo">Riya.</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Portfolio Projects</Link>
        </div>
    )
}
