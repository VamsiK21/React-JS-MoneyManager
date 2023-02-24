// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onClickedDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="t-btn">{title}</p>
      <p className="t-btn">Rs {amount}</p>
      <p className="t-btn">{type}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={onClickedDelete}
        className="delete-btn"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
