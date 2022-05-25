import PropTypes from 'prop-types';
import Painting from './Painting';
// import getRandomHexColor from './getRandomHexColor';
import stylesStatistics from './Statistics.module.css';

export default function PaintingList({ items }) {
  return (
    <ul className={stylesStatistics.stat_list}>
      {items.map(item => (
        <li className={stylesStatistics.item} key={item.id}>
          <Painting label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  key: PropTypes.string,
};

// export default function PaintingList({ items }) {
//   return (
//     <ul className={stylesStatistics.stat_list}>
//       <li className={stylesStatistics.blue}>
//         <Painting label={items[0].label} percentage={items[0].percentage} />
//       </li>
//       <li className={stylesStatistics.purple}>
//         <Painting label={items[1].label} percentage={items[1].percentage} />
//       </li>
//       <li className={stylesStatistics.red}>
//         <Painting label={items[2].label} percentage={items[2].percentage} />
//       </li>
//       <li className={stylesStatistics.green}>
//         <Painting label={items[3].label} percentage={items[3].percentage} />
//       </li>
//     </ul>
//   );
// }
