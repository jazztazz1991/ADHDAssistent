import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/' className='home-btn'><h1>ADHD Assistent</h1></Link>
            <nav className='nav-links'>
                <Link to='/planning' className='btn'>Planning</Link>
                <Link to='/todo' className='btn'>To-Do</Link>
            </nav>
        </div>
    );
}

export default Header;