import PropTypes from 'prop-types';
import Painting from './Painting';

import getRandomHexColor from './getRandomHexColor';
import { StatList, Item } from './Statistics.styled';

export default function PaintingList({ items }) {
  return (
    <StatList>
      {items.map(({ id, label, percentage }) => (
        <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <Painting label={label} percentage={percentage} />
        </Item>
      ))}
    </StatList>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
