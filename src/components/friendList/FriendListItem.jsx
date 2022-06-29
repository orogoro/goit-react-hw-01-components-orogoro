import PropTypes from 'prop-types';

import { Statuse, Avatar, Name } from './FriendList.styled';

export default function FriendListItem({ avatar, name, online }) {
  console.log(avatar);
  return (
    <>
      <Statuse online={online}></Statuse>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
