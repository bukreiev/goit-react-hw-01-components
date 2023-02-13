import PropTypes from 'prop-types';
import styles from './friendsStyle.module.css';
import FriendItem from '../FriendsListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.friendItem}>
          <FriendItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
