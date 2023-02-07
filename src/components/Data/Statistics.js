import getRandomColor from './getRandomColors';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  if (!title) {
    return null;
  }

  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {stats.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );

  function Item({ item }) {
    return (
      <li class="stat-item" style={{ backgroundColor: getRandomColor() }}>
        <span class="stat-label">{item.label}</span>
        <span class="stat-percentage">{item.percentage}%</span>
      </li>
    );
  }
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
