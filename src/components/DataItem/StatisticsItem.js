import styles from './StatisticsItemStyle.module.css';
import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percentage }) {
  return (
    <>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statPercentage}>{percentage}%</span>
    </>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
