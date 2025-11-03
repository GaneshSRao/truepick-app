import React, { useState, useEffect } from 'react';
import plans from './MembershipItems.json'; // Import the JSON data
import './Membership.css'; // Import the CSS file
import Hero from '../../Components/Hero/Hero';
import MembershipPlanCard from '../../Components/MembershipPlanCard/MembershipPlanCard';

const mockUserData = {
  currentPlan: 'Gold',
  endDate: '2025-10-15T23:59:59Z',
};

const heroData = {
        name: "Membership Plans",
        tagline: "Your Current Plan:" +  mockUserData.currentPlan + "| Expires on: "+ new Date(mockUserData.endDate).toLocaleDateString()
    };

const Membership = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    setUserData(mockUserData);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="container-wrapper">
        <div className="row">
          <Hero {...heroData} />
          <div className="col s12">
            <div className="membership-card-container">
              <h2 className="section-title">Pricing</h2>
              <div className="plan-grid">
                {plans.map((plan) => (
                  <MembershipPlanCard key={plan.id} plan={plan} isCurrent={userData?.currentPlan === plan.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;