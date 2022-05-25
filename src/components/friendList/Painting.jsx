import PropTypes from 'prop-types';
import styleFriendsList from './FriendList.module.css';

export default function Painting({ status, avatar, name, online }) {
  const statuse = online ? styleFriendsList.online : styleFriendsList.notOnline;

  return (
    <>
      <span className={statuse}>{status}</span>
      <img
        className={styleFriendsList.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styleFriendsList.name}>{name}</p>
    </>
  );
}

Painting.protoTypes = {
  status: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
