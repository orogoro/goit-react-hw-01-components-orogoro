import PropTypes from 'prop-types';
import Painting from './Painting';

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
        {transactions.map(item => (
          <TrStyle key={item.id}>
            <Painting
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </TrStyle>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.protoTypes = {
  key: PropTypes.string,
};

// sdsad
