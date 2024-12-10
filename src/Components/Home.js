import React from 'react';
import './Home.css';
import { IoIosMan } from "react-icons/io";
import Logo2 from '../Assets/ux.png';
import { FaUsersViewfinder } from "react-icons/fa6";

const Home = () => {
    return (
        <div className="home-container">
            <div className='welcome'>
            <FaUsersViewfinder/>
            </div>
            <br />
            <h1 className="welcome-text">
                Welcome to <span className="highlight">My Portfolio</span>
            </h1>
            <p className="description">
            <p className='text-align-center justify-content-center'> <IoIosMan/> Hi... , This Is Akash M</p>

            <img src={Logo2} alt='Frontend Developer' className="logo-img" /> 
                <ul className='text-align-center justify-content-center'>
                    My key Roles are:
                    <li>Front End Developer</li>
                    <li>React JS Developer</li>
                    <li>Web Developer</li>
                    <li>MERN Stack Developer</li>
                </ul>
            </p>
        </div>
    );
};

export default Home;
