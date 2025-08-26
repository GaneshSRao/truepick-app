import React from 'react';
import './AdminDashboard.css'; // Assuming you save the CSS in this file
import Hero from '../../Components/Hero/Hero';

const AdminDashboard = () => {
    const heroData = {
        name: "Admin Dashboard",
        tagline: "Welcome back, Admin! Here's a quick overview of your matrimony platform."
    };

    return (
        <div className="main-wrapper">
            <div className="container-wrapper">
                <div className="row">
                    {/* Hero Section */}
                    <Hero {...heroData} />

                    {/* Key Metrics */}
                    {/* <div className="col s12">
                        <h2 className="section-title">Key Metrics</h2>
                    </div> */}
                    <div className="col s12 m6 l3">
                        <div className="profile-section metric-card">
                            <i className="material-icons icon-large">group</i>
                            <span className="metric-value">12,345</span>
                            <span className="metric-label">Total Users</span>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="profile-section metric-card">
                            <i className="material-icons icon-large">person_add</i>
                            <span className="metric-value">250</span>
                            <span className="metric-label">New Registrations (Last 7 Days)</span>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="profile-section metric-card">
                            <i className="material-icons icon-large">favorite</i>
                            <span className="metric-value">876</span>
                            <span className="metric-label">Matches Made (Total)</span>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="profile-section metric-card">
                            <i className="material-icons icon-large">how_to_reg</i>
                            <span className="metric-value">980</span>
                            <span className="metric-label">Active Profiles</span>
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">Recent Activities</h2>
                            <div className="activity-feed">
                                <div className="activity-item">
                                    <i className="material-icons">person_add</i>
                                    <span className="activity-text">New profile registered: **Ravi Kumar** (ID: MP0012346)</span>
                                    <span className="activity-time">5 mins ago</span>
                                </div>
                                <div className="activity-item">
                                    <i className="material-icons">check_circle</i>
                                    <span className="activity-text">Profile **Priya Sharma** (ID: MP0012301) verified.</span>
                                    <span className="activity-time">1 hour ago</span>
                                </div>
                                <div className="activity-item">
                                    <i className="material-icons">mail_outline</i>
                                    <span className="activity-text">Interest sent by **Amit Singh** to **Deepa Patel**.</span>
                                    <span className="activity-time">3 hours ago</span>
                                </div>
                                <div className="activity-item">
                                    <i className="material-icons">edit</i>
                                    <span className="activity-text">Profile **Vikram Reddy** updated contact details.</span>
                                    <span className="activity-time">yesterday</span>
                                </div>
                                <div className="activity-item">
                                    <i className="material-icons">block</i>
                                    <span className="activity-text">User **Sneha Gupta** reported for inappropriate content.</span>
                                    <span className="activity-time">2 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">Quick Actions</h2>
                            <div className="row">
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">person_add</i>
                                        Add New Profile
                                    </a>
                                </div>
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">manage_accounts</i>
                                        Manage Users
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">verified_user</i>
                                        Verify Profiles
                                    </a>
                                </div>
                                <div className="col s6">
                                    <a href="#" className="quick-action-btn waves-effect waves-light">
                                        <i className="material-icons">report</i>
                                        View Reports
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Overview Table */}
                    <div className="col s12">
                        <div className="profile-section">
                            <h2 className="section-title">Recent Profiles Overview</h2>
                            <table className="dashboard-table">
                                <thead>
                                    <tr>
                                        <th>Profile ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MP0012346</td>
                                        <td>Ravi Kumar</td>
                                        <td>Male</td>
                                        <td>30</td>
                                        <td>Mumbai</td>
                                        <td><span className="status-chip pending">Pending Review</span></td>
                                        <td><a href="#" className="action-btn">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>MP0012345</td>
                                        <td>Jane Doe</td>
                                        <td>Female</td>
                                        <td>33</td>
                                        <td>Bengaluru</td>
                                        <td><span className="status-chip active">Active</span></td>
                                        <td><a href="#" className="action-btn">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>MP0012344</td>
                                        <td>Suresh Rao</td>
                                        <td>Male</td>
                                        <td>35</td>
                                        <td>Hyderabad</td>
                                        <td><span className="status-chip active">Active</span></td>
                                        <td><a href="#" className="action-btn">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>MP0012343</td>
                                        <td>Anjali Desai</td>
                                        <td>Female</td>
                                        <td>28</td>
                                        <td>Pune</td>
                                        <td><span className="status-chip pending">Pending Review</span></td>
                                        <td><a href="#" className="action-btn">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>MP0012342</td>
                                        <td>Kiran Singh</td>
                                        <td>Male</td>
                                        <td>32</td>
                                        <td>Delhi</td>
                                        <td><span className="status-chip rejected">Rejected</span></td>
                                        <td><a href="#" className="action-btn">View</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Charts/Graphs Placeholder */}
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">User Growth Over Time</h2>
                            <div className="chart-placeholder">
                                [Placeholder for User Growth Chart]
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="profile-section">
                            <h2 className="section-title">Profile Status Distribution</h2>
                            <div className="chart-placeholder">
                                [Placeholder for Profile Status Pie Chart]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;