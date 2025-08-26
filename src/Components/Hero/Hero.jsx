// src/components/Hero.js

import React from 'react';
import './Hero.css';

const Hero = ({ profileImg, name, tagline }) => {
    // Conditional rendering based on the presence of a profileImg
    if (!profileImg) {
        return (
            <div className="hero-section center">
                <p className="profile-space"></p>
                <h1 className="profile-name">{name}</h1>
                <p className="profile-tagline">{tagline}</p>
            </div>
        );
    }

    return (
        <div className="hero-section center">
            <img src={profileImg} alt="Profile Picture" className="profile-img-hero" />
            <h1 className="profile-name">{name}</h1>
            <p className="profile-tagline">{tagline}</p>
        </div>
    );
};

export default Hero;