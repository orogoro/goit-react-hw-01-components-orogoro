import PropTypes from 'prop-types';
import Painting from './Painting';

import { Stat_list, Item } from './Statistics.styled';

export default function PaintingList({ items }) {
  return (
    <Stat_list>
      {items.map(item => (
        <Item key={item.id}>
          <Painting label={item.label} percentage={item.percentage} />
        </Item>
      ))}
    </Stat_list>
  );
}

PaintingList.propTypes = {
  key: PropTypes.string,
};
