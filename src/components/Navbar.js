import React, { useState } from 'react';

import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';


function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                {/* Left ASME Logo */}
                <Link to="/" className="navbar-logo left-logo">
                    <img src="/images/Asme_bg.png" alt="ASME Logo" className="logo-img" />
                </Link>

                {/* Center Mechnovate Logo */}
                <div className="center-logo">
                    <img src="/images/m1.png" alt="Mechnovate Logo" className="logo-img-large" />
                </div>

                {/* Right-side Menu */}
                <div className="right-nav">
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBars} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item ">
                            <Link to="/#about" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        {/*<li className="nav-item ">
                            <Link to='/#about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>*/}
                        
                        <li className="nav-item">
                            <Link to='/#events' className='nav-links' onClick={closeMobileMenu}>Events</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/Location' className='nav-links' onClick={closeMobileMenu}>Accomodation</Link>
                        </li>

                        <li className="nav-item ">
                            <Link to='/#contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
