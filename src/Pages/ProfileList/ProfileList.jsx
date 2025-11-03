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
            <div className="col s12 m6 l4">
                <ProfileCard key={index} profile={profile} showViewProfileButton={true} />
            </div>
            ))}
        </div>
        </div>
    </div>
    );
};

export default ProfileList;