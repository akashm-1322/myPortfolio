import React from 'react';
import { FaLinkedin, FaPhone, FaEnvelope, FaGithub, FaBriefcase } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="links-section">
                <h2>Professional Links</h2>
                <ul>
                    <li>
                        <FaLinkedin className="icon" />
                        <a href="https://www.linkedin.com/in/akashm1322/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <FaGithub className="icon" />
                        <a href="https://github.com/akashm-1322" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <FaBriefcase className="icon" />
                        <a href="https://www.naukri.com/mnjuser/profile?" target="_blank" rel="noreferrer">
                            Naukri
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-details">
                <h2>Contact Details</h2>
                <p>
                    <FaEnvelope className="icon" /> Email: <a href="mailto:ash1322mkv@gmail.com">ash1322mkv@gmail.com</a>
                </p>
                <p>
                    <FaPhone className="icon" /> Phone: 9360660911
                </p>
            </div>
        </div>
    );
};

export default Contact;
