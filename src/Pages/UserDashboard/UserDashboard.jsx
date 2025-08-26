import React from 'react';
import './UserDashboard.css'; // Assuming you save the CSS in a separate file
import Hero from '../../Components/Hero/Hero';

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

                    {/* My Profile Summary */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">My Profile Summary</h2>
                            <div className="row">
                                <div className="col s12"><div className="info-item"><span className="info-label">Profile ID</span><span className="info-value">MP0012345</span></div></div>
                                <div className="col s12"><div className="info-item"><span className="info-label">Marital Status</span><span className="info-value">Never Married</span></div></div>
                                <div className="col s12"><div className="info-item"><span className="info-label">Occupation</span><span className="info-value">Software Engineer</span></div></div>
                                <div className="col s12"><div className="info-item"><span className="info-label">Current City</span><span className="info-value">Bengaluru</span></div></div>
                                <div className="col s12"><div className="info-item"><span className="info-label">Last Updated</span><span className="info-value">2025-07-25</span></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Key Interactions */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">Key Interactions</h2>
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="profile-section metric-card">
                                        <i className="material-icons icon-large">visibility</i>
                                        <span className="metric-value">125</span>
                                        <span className="metric-label">Profile Views</span>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="profile-section metric-card">
                                        <i className="material-icons icon-large">mail_outline</i>
                                        <span className="metric-value">34</span>
                                        <span className="metric-label">Interests Received</span>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="profile-section metric-card">
                                        <i className="material-icons icon-large">send</i>
                                        <span className="metric-value">48</span>
                                        <span className="metric-label">Interests Sent</span>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="profile-section metric-card">
                                        <i className="material-icons icon-large">favorite</i>
                                        <span className="metric-value">12</span>
                                        <span className="metric-label">Matches</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Match Suggestions */}
                    <div className="col s12">
                        <div className="profile-section">
                            <h2 className="section-title">Match Suggestions</h2>
                            <div className="row">
                                <div className="col s12 m6 l3">
                                    <div className="match-card">
                                        <img src="https://placehold.co/80x80/667eea/ffffff?text=Match1" alt="Match Profile" className="match-profile-img" />
                                        <span className="match-name">Rahul Singh</span>
                                        <span className="match-details">32, Engineer, Delhi</span>
                                        <a href="#" className="match-action-btn waves-effect waves-light">
                                            <i className="material-icons">visibility</i>View Profile
                                        </a>
                                    </div>
                                </div>
                                <div className="col s12 m6 l3">
                                    <div className="match-card">
                                        <img src="https://placehold.co/80x80/667eea/ffffff?text=Match2" alt="Match Profile" className="match-profile-img" />
                                        <span className="match-name">Priya Gupta</span>
                                        <span className="match-details">29, Doctor, Mumbai</span>
                                        <a href="#" className="match-action-btn waves-effect waves-light">
                                            <i className="material-icons">visibility</i>View Profile
                                        </a>
                                    </div>
                                </div>
                                <div className="col s12 m6 l3">
                                    <div className="match-card">
                                        <img src="https://placehold.co/80x80/667eea/ffffff?text=Match3" alt="Match Profile" className="match-profile-img" />
                                        <span className="match-name">Vikram Yadav</span>
                                        <span className="match-details">34, Business, Chennai</span>
                                        <a href="#" className="match-action-btn waves-effect waves-light">
                                            <i className="material-icons">visibility</i>View Profile
                                        </a>
                                    </div>
                                </div>
                                <div className="col s12 m6 l3">
                                    <div className="match-card">
                                        <img src="https://placehold.co/80x80/667eea/ffffff?text=Match4" alt="Match Profile" className="match-profile-img" />
                                        <span className="match-name">Anusha Rao</span>
                                        <span className="match-details">31, Architect, Hyderabad</span>
                                        <a href="#" className="match-action-btn waves-effect waves-light">
                                            <i className="material-icons">visibility</i>View Profile
                                        </a>
                                    </div>
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

                    {/* Quick Actions for User */}
                    <div className="col s12">
                        <div className="profile-section">
                            <h2 className="section-title">Quick Actions</h2>
                            <div className="row">
                                <div className="col s6 m3">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">edit</i>
                                        Edit Profile
                                    </a>
                                </div>
                                <div className="col s6 m3">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">search</i>
                                        Search Matches
                                    </a>
                                </div>
                                <div className="col s6 m3">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">star</i>
                                        Upgrade Membership
                                    </a>
                                </div>
                                <div className="col s6 m3">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">settings</i>
                                        Account Settings
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;