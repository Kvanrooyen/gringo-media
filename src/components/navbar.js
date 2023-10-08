import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 bg-transparent p-4 flex justify-center items-center z-50">
            <Link to="/" className="text-white text-xl font-semibold mx-4">HOME</Link>
            <Link to="/about" className="text-white text-xl font-semibold mx-4">ABOUT US</Link>
        </nav>
    );
}

export default NavBar;
