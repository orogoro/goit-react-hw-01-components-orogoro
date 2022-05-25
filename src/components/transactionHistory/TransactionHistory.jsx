import PropTypes from 'prop-types';
import Painting from './Painting';
import styleTransaction from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={styleTransaction.transaction_history}>
      <thead className={styleTransaction.thead_style}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <tr className={styleTransaction.tr_style} key={item.id}>
            <Painting
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.protoTypes = {
  key: PropTypes.string,
};
