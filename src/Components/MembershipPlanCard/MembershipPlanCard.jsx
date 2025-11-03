import './MembershipPlanCard.css';

const MembershipPlanCard = ({ plan, isCurrent }) => (
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

export default MembershipPlanCard;