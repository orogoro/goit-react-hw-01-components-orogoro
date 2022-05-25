import PropTypes from 'prop-types';
import Painting from './Painting';
import styleFriendsList from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styleFriendsList.friend_list}>
      {friends.map(item => (
        <li className={styleFriendsList.item} key={item.id}>
          <Painting
            status={item.status}
            avatar={item.avatar}
            name={item.name}
            online={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  key: PropTypes.string,
};
