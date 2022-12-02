import PropTypes from 'prop-types';
import {TransactionTable, ItemInfo} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <ItemInfo>{type}</ItemInfo>
                <ItemInfo>{amount}</ItemInfo>
                <ItemInfo>{currency}</ItemInfo>
              </tr>
            );
          })}
        </tbody>
        </TransactionTable>
    );
  };

  TransactionHistory.propTypes = PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }))