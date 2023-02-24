/* eslint-disable no-undef */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const {displayText} = optionType

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      optionId: transactionTypeOptions[0].optionId,
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeInputTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeInputAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state

    const filteredList = transactionList.filter(eachItem => eachItem.id !== id)

    this.setState({
      transactionList: filteredList,
    })
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(element => {
      if (element.type === transactionTypeOptions[1].displayText) {
        expensesAmount += element.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state

    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(element => {
      if (element.type === transactionTypeOptions[0].displayText) {
        incomeAmount += element.amount
      } else {
        expensesAmount += element.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="welcome-card">
            <h1 className="welcome-heading">Hi, Richard</h1>
            <p className="welcome-message">
              Welcome back to your{' '}
              <span className="span-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="bottom-container">
            <form className="form" onSubmit={this.onAddTransaction}>
              <h1 className="add-text">Add Transaction</h1>
              <label className="label-text" htmlFor="titleId">
                TITLE
              </label>
              <input
                onChange={this.onChangeInputTitle}
                id="titleId"
                type="text"
                className="input-style"
                placeholder="TITLE"
                value={titleInput}
              />

              <label className="label-text" htmlFor="amountId">
                AMOUNT
              </label>
              <input
                onChange={this.onChangeInputAmount}
                id="amountId"
                type="text"
                className="input-style"
                placeholder="AMOUNT"
                value={amountInput}
              />

              <label className="label-text" htmlFor="incomeId">
                TYPE
              </label>
              <select
                id="incomeId"
                className="input-style"
                onChange={this.onChangeType}
                value={optionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option
                    value={eachType.optionId}
                    key={eachType.optionId}
                    className="option"
                  >
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-text">History</h1>
              <ul className="history-item-container">
                <li className="list-item-container">
                  <p className="title-btn">Title</p>
                  <p className="title-btn">Amount</p>
                  <p className="title-btn">Type</p>
                </li>
                {transactionList.map(eachItem => (
                  <TransactionItem
                    onDeleteTransaction={this.onDeleteTransaction}
                    transactionDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
