import css from './TransactionHistory.module.css'
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