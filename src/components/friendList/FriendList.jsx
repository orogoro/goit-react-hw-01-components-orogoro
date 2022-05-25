import PropTypes from 'prop-types';
import Painting from './Painting';

import { FriendListUl, Item } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(item => (
        <Item key={item.id}>
          <Painting
            status={item.status}
            avatar={item.avatar}
            name={item.name}
            online={item.isOnline}
          />
        </Item>
      ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  key: PropTypes.string,
};
