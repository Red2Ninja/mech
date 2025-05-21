import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                {/* Left ASME Logo */}
                <Link to="/" className="navbar-logo left-logo">
                    <img src="./images/logo_bw.jpeg" alt="ASME Logo" className="logo-img" />
                </Link>

                {/* Center Mechnovate Logo */}
                <div className="center-logo">
                    <img src="./images/mechnovate_img.jpg" alt="Mechnovate Logo" className="logo-img-large" />
                </div>

                {/* Right-side Menu */}
                <div className="right-nav">
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBars} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>Events</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
