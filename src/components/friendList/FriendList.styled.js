import styled from 'styled-components';

export const FriendListUl = styled.ul`
  display: grid;
  grid-row-gap: 15px;
  width: 350px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  background-color: #fff;
  align-items: center;
  border-radius: 3px;
  box-shadow: 10px 8px 7px 2px rgba(34, 60, 80, 0.2);
`;

export const Statuse = styled.span`
  margin: 20px;
  width: 25px;
  height: 25px;
  background-color: ${props => (props.online ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 30px;
`;
