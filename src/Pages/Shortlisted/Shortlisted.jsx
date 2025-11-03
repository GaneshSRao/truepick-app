import React from 'react';
import './Shortlisted.css'; // Assuming you save the CSS in a file named Profiles.css
import ShortlistedItems from './ShortlistedItems.json';
import Hero from '../../Components/Hero/Hero';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

const Shortlisted = () => {
    const heroData = {
        name: "Shortlisted",
        tagline: "Here are the profiles that you have shortlisted."
    };
    return(
    <div className="main-wrapper">
        <div className="container-wrapper">
        <div className="row">
            {/* Hero Section */}
            <Hero {...heroData} />

            {ShortlistedItems.map((profile, index) => (
            <div className="col s12 m6 l4">
                <ProfileCard key={index} profile={profile} showViewProfileButton={true} />
            </div>
            ))}
        </div>
        </div>
    </div>
    );
};

export default Shortlisted;