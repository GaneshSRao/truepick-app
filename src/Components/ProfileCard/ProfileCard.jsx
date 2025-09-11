import './ProfileCard.css';

const ProfileCard = ({ profile, showViewProfileButton, showAcceptButton, showRejectButton }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="profile-card">
        <img src={profile.imgSrc} alt="Profile Picture" className="profile-card-img" />
        <div className="profile-text-content">
          <h2 className="profile-card-name">{profile.name}</h2>
          {profile.tagline.map((line, index) => (
            <p key={index} className="profile-card-tagline-item">{line}</p>
          ))}
          <div className="profile-card-info">
            {profile.info.map((item, index) => (
              <span key={index} className="profile-card-info-item">{item}</span>
            ))}
          </div>
        </div>
        <div className="col s12 m12 l12 no-padding">
          {showViewProfileButton && (
            <a href="#" className="view-profile-btn waves-effect waves-light">View Profile</a>
          )}
          {showAcceptButton && (
            <a href="#" className="view-profile-btn waves-effect waves-light">Accept</a>
          )}
          {showRejectButton && (
            <a href="#" className="view-profile-btn waves-effect waves-light">Reject</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;