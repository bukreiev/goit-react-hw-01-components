import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

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
          <Item key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
  function Item({ item }) {
    return (
      <tr>
        <td className={styles.itemColumn}>{item.type}</td>
        <td className={styles.itemColumn}>{item.amount}</td>
        <td className={styles.itemColumn}>{item.currency}</td>
      </tr>
    );
  }
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionsHistory;
