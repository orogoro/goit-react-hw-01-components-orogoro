import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import { FriendListUl, Item } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <FriendListItem avatar={avatar} name={name} online={isOnline} />
        </Item>
      ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
