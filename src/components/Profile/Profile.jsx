import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li>
          <span>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
