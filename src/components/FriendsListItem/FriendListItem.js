import PropTypes from 'prop-types';
import styles from './FriendListItemStyle.module.css';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={styles.friendStatus}
        style={isOnline ? {} : { backgroundColor: 'rgb(204, 2, 2)' }}
      ></span>
      <img
        className={styles.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
