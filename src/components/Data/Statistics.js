import getRandomColor from './getRandomColors';
import PropTypes from 'prop-types';
import styles from './dataStyle.module.css';
import StatisticsItem from '../DataItem/StatisticsItem';

const Statistics = ({ title, stats }) => {
  if (!title) {
    return null;
  }

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={styles.statItem}
            style={{ backgroundColor: getRandomColor() }}
          >
            <StatisticsItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
