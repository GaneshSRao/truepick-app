import React from 'react';
import './UserDashboard.css'; // Assuming you save the CSS in a separate file
import Hero from '../../Components/Hero/Hero';
import MetricCard from '../../Components/MetricCard/MetricCard';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import ShortlistedItems from '../../Pages/Shortlisted/ShortlistedItems.json';
import metricData from '../../Pages/UserDashboard/UserDashboardItems.json';

const UserDashboard = () => {
    const heroData = {
        name: "Welcome, Jane Doe!",
        tagline: "Your personalized matrimonial dashboard."
    };
    
    return (
        <div className="main-wrapper">
            <div className="container-wrapper">
                <div className="row">
                    {/* Hero Section */}
                    <Hero {...heroData} />

                    {metricData.map((metric, index) => (
                        <MetricCard key={index} metricData={metric} />
                    ))}

                    {/* My Profile Summary */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">My Profile Summary</h2>
                            <div className="row">
                                <div className="col s12 l6"><div className="info-item"><span className="info-label">Profile ID</span><span className="info-value">MP0012345</span></div></div>
                                <div className="col s12 l6"><div className="info-item"><span className="info-label">Marital Status</span><span className="info-value">Never Married</span></div></div>
                                <div className="col s12 l6"><div className="info-item"><span className="info-label">Occupation</span><span className="info-value">Software Engineer</span></div></div>
                                <div className="col s12 l6"><div className="info-item"><span className="info-label">Current City</span><span className="info-value">Bengaluru</span></div></div>
                                <div className="col s12 l6"><div className="info-item"><span className="info-label">Membership Plan</span><span className="info-value">Gold</span></div></div>
                                <div className="col s12 l6"><div className="info-item"><span className="info-label">Last Updated</span><span className="info-value">2025-07-25</span></div></div>
                            </div>
                        </div>
                    </div>

                   {/* Quick Actions for User */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">Quick Actions</h2>
                            <div className="row">
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">edit</i>
                                        Edit Profile
                                    </a>
                                </div>
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">search</i>
                                        Search Matches
                                    </a>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">star</i>
                                        Upgrade Membership
                                    </a>
                                </div>
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">settings</i>
                                        Account Settings
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Match Suggestions */}
                    <div className="col s12">
                        <div className="profile-section">
                            <h2 className="section-title">Match Suggestions</h2>
                            <div className="row">
                                
                                    {ShortlistedItems.map((profile, index) => (
                                        <div className="col s12 m6 l3">
                                            <ProfileCard key={index} profile={profile} showViewProfileButton={true} dark={true}/>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* My Media */}
                    <div className="col s12">
                        <div className="profile-section">
                            <h2 className="section-title">My Photos</h2>
                            <div className="media-gallery">
                                <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=MyPic1" alt="My Photo 1" className="media-item" />
                                <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=MyPic2" alt="My Photo 2" className="media-item" />
                                <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=MyPic3" alt="My Photo 3" className="media-item" />
                                <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=MyPic4" alt="My Photo 4" className="media-item" />
                                <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=MyPic5" alt="My Photo 5" className="media-item" />
                                <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=MyPic6" alt="My Photo 6" className="media-item" />
                            </div>
                            <div className="center-align" style={{ marginTop: '1.5rem' }}>
                                <a href="#" className="btn waves-effect waves-light primary-action-btn">View All Photos<i className="material-icons right">photo_library</i></a>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
    );
};

export default UserDashboard;