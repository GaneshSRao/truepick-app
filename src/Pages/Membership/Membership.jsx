import React, { useState, useEffect } from 'react';
import plans from './MembershipItems.json'; // Import the JSON data
import './Membership.css'; // Import the CSS file

const mockUserData = {
  currentPlan: 'Gold',
  endDate: '2025-10-15T23:59:59Z',
};

const HeroSection = ({ userData }) => (
  <div className="hero-section center">
    <h1 className="page-title">Membership Plans</h1>
    {userData && (
      <div className="page-subtitle">
        Your Current Plan: <span>{userData.currentPlan}</span> | Expires on: <span>{new Date(userData.endDate).toLocaleDateString()}</span>
      </div>
    )}
  </div>
);

const PlanCard = ({ plan, isCurrent }) => (
  <div className={`plan-card ${isCurrent ? 'is-current' : ''}`}>
    {isCurrent && <div className="current-plan-tick">✓</div>}
    <h3 className="plan-title">{plan.name}</h3>
    <div className="plan-price">{plan.price}</div>
    <div className="plan-period">{plan.period}</div>
    <ul className="plan-features">
      {plan.features.map((feature, index) => (
        <li key={index}>
          <span className="icon">✓</span> {feature}
        </li>
      ))}
    </ul>
    <button className="primary-action-btn">
      Choose Plan
    </button>
  </div>
);

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    setUserData(mockUserData);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="container-wrapper">
        <div className="row">
          <HeroSection userData={userData} />
          <div className="col s12">
            <div className="membership-card-container">
              <h2 className="section-title">Pricing</h2>
              <div className="plan-grid">
                {plans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} isCurrent={userData?.currentPlan === plan.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;