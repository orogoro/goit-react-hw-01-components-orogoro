import styled from 'styled-components';
// import getRandomHexColor from './getRandomHexColor';

export const Statistics = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  border-radius: 2px;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 30px;
  font-size: 35px;
  color: #666666;
`;

export const Stat_list = styled.ul`
  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0cm;
  height: 70px;
  list-style: none;
  font-size: 20px;
`;

export const Item = styled.li`
  display: grid;
  padding: 5px;
  width: 100%;
  border: 1px solid #000;
`;
