import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
return(
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
      <a href="#" className="view-profile-btn waves-effect waves-light">View Profile</a>
    </div>
  </div>
);
};
export default ProfileCard;