import React from 'react';
import './Profile.css'; // Import the CSS file
import profileData from './ProfileData.json';
import Hero from '../../Components/Hero/Hero';

const Profile = () => {
    const heroData = {
        profileImg: "https://placehold.co/150x150/764ba2/ffffff?text=Profile",
        name: profileData.basicInfo.fullname,
        tagline: profileData.professionalInfo.occupation+" | "+profileData.basicInfo.maritalStatus+" | "+profileData.locationDetails.currentCity
    };

    return (
        <div className="main-wrapper">
            <div className="container-wrapper">
                <div className="row">
                    {/* Hero Section */}
                    <Hero {...heroData} />
                    {/* Basic & Contact Information */}
                    <div className="profile-section">
                        <h2 className="section-title">Basic & Contact Information</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Profile ID</span><span className="info-value">{profileData.basicInfo.profileId}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Gender</span><span className="info-value">{profileData.basicInfo.gender}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Date of Birth</span><span className="info-value">{profileData.basicInfo.dob}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Age</span><span className="info-value">{profileData.basicInfo.age}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Email Address</span><span className="info-value">{profileData.basicInfo.email}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Mobile Number</span><span className="info-value">{profileData.basicInfo.mobile}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Alternate Mobile Number</span><span className="info-value">{profileData.basicInfo.alternateMobile}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Profile Created By</span><span className="info-value">{profileData.basicInfo.profileCreatedBy}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Marital Status</span><span className="info-value">{profileData.basicInfo.maritalStatus}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Children</span><span className="info-value">{profileData.basicInfo.children}</span></div></div>
                        </div>
                    </div>

                    {/* Personal & Lifestyle Details */}
                    <div className="profile-section">
                        <h2 className="section-title">Personal & Lifestyle Details</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Religion</span><span className="info-value">{profileData.personalInfo.religion}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Community/Caste</span><span className="info-value">{profileData.personalInfo.community}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Sub-Community/Sub-Caste</span><span className="info-value">{profileData.personalInfo.subCommunity}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Mother Tongue</span><span className="info-value">{profileData.personalInfo.motherTongue}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Dietary Habits</span><span className="info-value">{profileData.personalInfo.dietaryHabits}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Drinking Habits</span><span className="info-value">{profileData.personalInfo.drinkingHabits}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Smoking Habits</span><span className="info-value">{profileData.personalInfo.smokingHabits}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Hobbies & Interests</span><div className="flex flex-wrap">
                                {profileData.personalInfo.hobbies.map((hobby, index) => (
                                    <div key={index} className="chip">{hobby}</div>
                                ))}
                            </div></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">About Me/Self Description</span><span className="info-value">{profileData.personalInfo.aboutMe}</span></div></div>
                        </div>
                    </div>

                    {/* Professional & Educational Information */}
                    <div className="profile-section">
                        <h2 className="section-title">Professional & Educational Information</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Highest Education</span><span className="info-value">{profileData.professionalInfo.highestEducation}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Education Field</span><span className="info-value">{profileData.professionalInfo.educationField}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">College/University</span><span className="info-value">{profileData.professionalInfo.college}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Occupation/Profession</span><span className="info-value">{profileData.professionalInfo.occupation}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Company Name</span><span className="info-value">{profileData.professionalInfo.company}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Annual Income</span><span className="info-value">{profileData.professionalInfo.annualIncome}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Work Location</span><span className="info-value">{profileData.professionalInfo.workLocation}</span></div></div>
                        </div>
                    </div>

                    {/* Family Details */}
                    <div className="profile-section">
                        <h2 className="section-title">Family Details</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Father's Occupation</span><span className="info-value">{profileData.familyDetails.fatherOccupation}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Mother's Occupation</span><span className="info-value">{profileData.familyDetails.motherOccupation}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Number of Siblings</span><span className="info-value">{profileData.familyDetails.numberOfSiblings}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Brothers</span><span className="info-value">{profileData.familyDetails.brothers}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Sisters</span><span className="info-value">{profileData.familyDetails.sisters}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Family Type</span><span className="info-value">{profileData.familyDetails.familyType}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Family Status</span><span className="info-value">{profileData.familyDetails.familyStatus}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Family Values</span><span className="info-value">{profileData.familyDetails.familyValues}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Ancestral Origin</span><span className="info-value">{profileData.familyDetails.ancestralOrigin}</span></div></div>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="profile-section">
                        <h2 className="section-title">Location Details</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Current City</span><span className="info-value">{profileData.locationDetails.currentCity}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Current State</span><span className="info-value">{profileData.locationDetails.currentState}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Current Country</span><span className="info-value">{profileData.locationDetails.currentCountry}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Permanent City</span><span className="info-value">{profileData.locationDetails.permanentCity}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Permanent State</span><span className="info-value">{profileData.locationDetails.permanentState}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Permanent Country</span><span className="info-value">{profileData.locationDetails.permanentCountry}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Citizenship</span><span className="info-value">{profileData.locationDetails.citizenship}</span></div></div>
                        </div>
                    </div>

                    {/* Physical Attributes */}
                    <div className="profile-section">
                        <h2 className="section-title">Physical Attributes</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Height</span><span className="info-value">{profileData.physicalAttributes.height}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Weight</span><span className="info-value">{profileData.physicalAttributes.weight}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Body Type</span><span className="info-value">{profileData.physicalAttributes.bodyType}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Complexion</span><span className="info-value">{profileData.physicalAttributes.complexion}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Physical Status</span><span className="info-value">{profileData.physicalAttributes.physicalStatus}</span></div></div>
                        </div>
                    </div>

                    {/* Horoscope/Astrological Details */}
                    <div className="profile-section">
                        <h2 className="section-title">Horoscope/Astrological Details</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Star/Nakshatra</span><span className="info-value">{profileData.horoscope.star}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Raasi/Moon Sign</span><span className="info-value">{profileData.horoscope.raasi}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Manglik/Dosham</span><span className="info-value">{profileData.horoscope.manglik}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Birth Time</span><span className="info-value">{profileData.horoscope.birthTime}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Birth Place</span><span className="info-value">{profileData.horoscope.birthPlace}</span></div></div>
                        </div>
                    </div>

                    {/* Partner Preferences */}
                    <div className="profile-section">
                        <h2 className="section-title">Partner Preferences</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Age Range</span><span className="info-value">{profileData.partnerPreferences.ageRange}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Height Range</span><span className="info-value">{profileData.partnerPreferences.heightRange}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Marital Status Preference</span><span className="info-value">{profileData.partnerPreferences.maritalStatus}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Religion Preference</span><span className="info-value">{profileData.partnerPreferences.religion}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Community/Caste Preference</span><span className="info-value">{profileData.partnerPreferences.community}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Mother Tongue Preference</span><span className="info-value">{profileData.partnerPreferences.motherTongue}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Education Preference</span><span className="info-value">{profileData.partnerPreferences.education}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Occupation Preference</span><span className="info-value">{profileData.partnerPreferences.occupation}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Annual Income Preference</span><span className="info-value">{profileData.partnerPreferences.annualIncome}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Dietary Habits Preference</span><span className="info-value">{profileData.partnerPreferences.dietaryHabits}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Drinking Habits Preference</span><span className="info-value">{profileData.partnerPreferences.drinkingHabits}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Smoking Habits Preference</span><span className="info-value">{profileData.partnerPreferences.smokingHabits}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Location Preference</span><span className="info-value">{profileData.partnerPreferences.location}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Manglik/Dosham Preference</span><span className="info-value">{profileData.partnerPreferences.manglik}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">About My Partner</span><span className="info-value">{profileData.partnerPreferences.aboutPartner}</span></div></div>
                        </div>
                    </div>

                    {/* Profile Management & Security */}
                    <div className="profile-section">
                        <h2 className="section-title">Profile Management & Security</h2>
                        <div className="row">
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Profile Status</span><span className="info-value">{profileData.management.profileStatus}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Last Login</span><span className="info-value">{profileData.management.lastLogin}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Profile Visibility</span><span className="info-value">{profileData.management.profileVisibility}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Photo Visibility Settings</span><span className="info-value">{profileData.management.photoVisibility}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Verification Status</span><span className="info-value">{profileData.management.verificationStatus}</span></div></div>
                            <div className="col s12 m4"><div className="info-item"><span className="info-label">Created At</span><span className="info-value">{profileData.management.createdAt}</span></div></div>
                            <div className="col s12"><div className="info-item"><span className="info-label">Last Updated At</span><span className="info-value">{profileData.management.lastUpdatedAt}</span></div></div>
                        </div>
                    </div>

                    {/* Media */}
                    <div className="profile-section">
                        <h2 className="section-title">Media</h2>
                        <div className="row">
                            <div className="col s12"><div className="info-item"><span className="info-label">Profile Picture(s)</span><div className="media-gallery">
                                {profileData.media.profilePictures.map((src, index) => (
                                    <img key={index} src={src} alt={`Profile Pic ${index + 1}`} className="media-item" />
                                ))}
                            </div></div></div>
                            <div className="col s12 mt-4"><div className="info-item"><span className="info-label">Photo Album</span><div className="media-gallery">
                                {profileData.media.photoAlbum.map((src, index) => (
                                    <img key={index} src={src} alt={`Album Pic ${index + 1}`} className="media-item" />
                                ))}
                            </div></div></div>
                            <div className="col s12 mt-4"><div className="info-item"><span className="info-label">Video Profile</span><span className="info-value">{profileData.media.videoProfile}</span></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;