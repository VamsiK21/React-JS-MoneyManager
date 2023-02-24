// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props

  return (
    <ul className="money-details-container">
      <li className="item-container">
        <img
          className="money-details-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balance-container">
          <p className="balance-text">Your Balance</p>
          <p data-testid="balanceAmount" className="rupees-text">
            {balanceAmount}
          </p>
        </div>
      </li>

      <li className="item-container income-container">
        <img
          className="money-details-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="balance-container">
          <p className="balance-text">Your Income</p>
          <p data-testid="incomeAmount" className="rupees-text">
            {incomeAmount}
          </p>
        </div>
      </li>

      <li className="item-container expense-container">
        <img
          className="money-details-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="balance-container">
          <p className="balance-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="rupees-text">
            {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
