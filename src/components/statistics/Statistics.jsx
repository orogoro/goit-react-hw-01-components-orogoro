import PropTypes from 'prop-types';
import PaintingList from './PaintingList';
import data from './data.json';
import stylesStatistics from './Statistics.module.css';

export default function Statistic({ title }) {
  return (
    <section className={stylesStatistics.statistics}>
      <h2 className={stylesStatistics.title}>{title}</h2>
      <PaintingList items={data} />
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
};
