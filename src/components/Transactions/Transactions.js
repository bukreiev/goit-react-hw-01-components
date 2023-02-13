import PropTypes from 'prop-types';
import styles from './Transactions.module.css';
import TransactionsHistoryItem from '../TransactionsItem/TransactionsItem';

const TransactionsHistory = ({ items }) => {
  return (
    <table className={styles.historyTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.headColumn}>Type</th>
          <th className={styles.headColumn}>Amount</th>
          <th className={styles.headColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionsHistoryItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionsHistory;
