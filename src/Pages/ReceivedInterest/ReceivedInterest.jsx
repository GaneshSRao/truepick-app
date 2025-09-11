import React from 'react';
import './ReceivedInterest.css'; // Assuming you save the CSS in a file named Profiles.css
import ReceivedInterestItems from './ReceivedInterestItems.json';
import Hero from '../../Components/Hero/Hero';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

const ReceivedInterest = () => {
    const heroData = {
        name: "Received Interests",
        tagline: "People showing Interests on your profile."
    };
    return(
    <div className="main-wrapper">
        <div className="container-wrapper">
        <div className="row">
            {/* Hero Section */}
            <Hero {...heroData} />

            {ReceivedInterestItems.map((profile, index) => (
            <ProfileCard key={index} profile={profile} showViewProfileButton={true} showAcceptButton={true} showRejectButton={true}/>
            ))}
        </div>
        </div>
    </div>
    );
};

export default ReceivedInterest;