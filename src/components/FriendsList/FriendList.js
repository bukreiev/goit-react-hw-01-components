import PropTypes from 'prop-types';
import styles from './friendsStyle.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );

  function Friend({ friend }) {
    return (
      <li className={styles.friendItem}>
        <span
          className={styles.friendStatus}
          style={friend.isOnline ? {} : { backgroundColor: 'rgb(204, 2, 2)' }}
        ></span>
        <img
          className={styles.friendAvatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.friendName}>{friend.name}</p>
      </li>
    );
  }
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
