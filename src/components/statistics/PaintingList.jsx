import PropTypes from 'prop-types';
import Painting from './Painting';

import getRandomHexColor from './getRandomHexColor';
import { StatList, Item } from './Statistics.styled';

export default function PaintingList({ items }) {
  return (
    <StatList>
      {items.map(item => (
        <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
          <Painting label={item.label} percentage={item.percentage} />
        </Item>
      ))}
    </StatList>
  );
}

PaintingList.propTypes = {
  key: PropTypes.string,
};
