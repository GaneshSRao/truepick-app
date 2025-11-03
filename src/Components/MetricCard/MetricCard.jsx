import React from 'react';
import './MetricCard.css';

const MetricCard = ({ metricData}) => {
    // Conditional rendering based on the presence of a profileImg
    return (
        <div className="col s12 m6 l3">
            <div className="profile-section metric-card">
                <i className="material-icons icon-large">{metricData.icon}</i>
                <span className="metric-value">{metricData.value}</span>
                <span className="metric-label">{metricData.label}</span>
            </div>
        </div>
    );
};

export default MetricCard;