import getRandomColor from './getRandomColors';
import PropTypes from 'prop-types';
import styles from './dataStyle.module.css';

const Statistics = ({ title, stats }) => {
  if (!title) {
    return null;
  }

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );

  function Item({ item }) {
    return (
      <li
        className={styles.statItem}
        style={{ backgroundColor: getRandomColor() }}
      >
        <span className={styles.statLabel}>{item.label}</span>
        <span className={styles.statPercentage}>{item.percentage}%</span>
      </li>
    );
  }
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
