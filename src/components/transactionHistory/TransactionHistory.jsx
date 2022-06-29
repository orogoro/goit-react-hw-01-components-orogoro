import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

import {
  TransactionTable,
  TheadStyle,
  TrStyle,
} from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <TransactionTable>
      <TheadStyle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TheadStyle>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TrStyle key={id}>
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </TrStyle>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
