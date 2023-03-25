import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({ transactions }) => {
    return <table className={css.transactionHistory}>
  <thead  className={css.transactionHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
            {transactions.map((transaction) =>
        <tr key={transaction.id} className={css.transactionRow}>
      <td className={css.transactionCellType}>{transaction.type}</td>
      <td className={css.transactionCellAmount}>{transaction.amount}</td>
      <td className={css.transactionCell}>{transaction.currency}</td>
    </tr> )}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}