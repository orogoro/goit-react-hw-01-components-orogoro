import PropTypes from 'prop-types';

import { Statuse, Avatar, Name } from './FriendList.styled';

export default function Painting({ status, avatar, name, online }) {
  return (
    <>
      <Statuse online={online}>{status}</Statuse>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}

Painting.protoTypes = {
  status: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
