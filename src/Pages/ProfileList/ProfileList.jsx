import React from 'react';
import './ProfileList.css'; // Assuming you save the CSS in a file named Profiles.css
import ProfileListItems from './ProfileListItems.json';
import Hero from '../../Components/Hero/Hero';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

const ProfileList = () => {
    const heroData = {
        name: "Explore Profiles",
        tagline: "Let's get your match."
    };
    return(
    <div className="main-wrapper">
        <div className="container-wrapper">
        <div className="row">
            {/* Hero Section */}
            <Hero {...heroData} />

            {ProfileListItems.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
            ))}
        </div>
        </div>
    </div>
    );
};

export default ProfileList;