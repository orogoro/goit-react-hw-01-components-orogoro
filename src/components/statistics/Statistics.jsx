import PropTypes from 'prop-types';
import PaintingList from './PaintingList';
import data from './data.json';

import { Statistics, Title } from './Statistics.styled';

export default function Statistic({ title }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <PaintingList items={data} />
    </Statistics>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
};
