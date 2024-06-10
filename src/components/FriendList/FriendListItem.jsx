import css from "./FriendListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}></p>
    </div>
  );
};

export default FriendsListItem;
