import styled from 'styled-components';

export const DivProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 325px;
  height: 400px;
  border-radius: 5px;
  background-color: #faffff;
  border: 1px solid #000;
`;

export const ImgAvatar = styled.img`
  margin-top: 40px;
  width: 125px;
  border-radius: 50%;
  background-color: #8c3920;
`;

export const Name = styled.p`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 15px;
  color: #9fa1a1;
  margin: 0;
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #9fa1a1;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  background-color: #c9c6c5;

  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
`;

export const Item = styled.li`
  display: grid;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 0 0 3px 3px;

  padding: 10px;
  padding-top: 20px;
  width: 100%;
`;

export const Label = styled.span`
  color: #9fa1a1;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
