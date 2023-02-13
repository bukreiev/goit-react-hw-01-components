import PropTypes from 'prop-types';
import styles from './TransactionsItem.module.css';

export default function TransactionsHistoryItem({ type, amount, currency }) {
  return (
    <>
      <td className={styles.itemColumn}>{type}</td>
      <td className={styles.itemColumn}>{amount}</td>
      <td className={styles.itemColumn}>{currency}</td>
    </>
  );
}

TransactionsHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
