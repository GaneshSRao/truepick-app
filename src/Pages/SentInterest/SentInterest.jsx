import React from 'react';
import './SentInterest.css'; // Assuming you save the CSS in a file named Profiles.css
import SentInterestItems from './SentInterestItems.json';
import Hero from '../../Components/Hero/Hero';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

const SentInterest = () => {
    const heroData = {
        name: "Sent Interests",
        tagline: "Here are the profiles you showed interest on."
    };
    return(
    <div className="main-wrapper">
        <div className="container-wrapper">
        <div className="row">
            {/* Hero Section */}
            <Hero {...heroData} />

            {SentInterestItems.map((profile, index) => (
            <div className="col s12 m6 l4">
                <ProfileCard key={index} profile={profile} showViewProfileButton={true} />
            </div>
            ))}
        </div>
        </div>
    </div>
    );
};

export default SentInterest;