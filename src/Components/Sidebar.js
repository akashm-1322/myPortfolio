import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';
import icon from '../Assets/letter-a.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={icon} className='icon top-icon-image'/>
            <Link to="/" className="sidebar-link">
                <FaHome className="icon" />
                <span>Home</span>
            </Link>
            <Link to="/about" className="sidebar-link">
                <FaUserAlt className="icon" />
                <span>About</span>
            </Link>
            <Link to="/contact" className="sidebar-link">
                <FaEnvelope className="icon" />
                <span>Contact</span>
            </Link>
        </div>
    );
};

export default Sidebar;
