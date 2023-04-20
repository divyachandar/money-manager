import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

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

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    activeTypeId: transactionTypeOptions[0].optionId,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeId = event => {
    this.setState({activeTypeId: event.target.value})
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    this.setState({
      transactionsList: transactionsList.filter(
        transaction => transaction.id !== id,
      ),
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, activeTypeId} = this.state
    const typeOption = transactionTypeOptions.find(
      transaction => transaction.optionId === activeTypeId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      activeTypeId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpense = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })
    return expenseAmount
  }

  render() {
    const {transactionsList, titleInput, amountInput, activeTypeId} = this.state
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpense()
    const balanceAmount = incomeAmount - expensesAmount
    return (
      <div className="app-container">
        <div className="money-manager-header-section">
          <h1 className="money-manager-header">Hi,Richard</h1>
          <p className="description">Welcome back to your</p>
        </div>
        <div className="money-details-container">
          <MoneyDetails
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
            balanceAmount={balanceAmount}
          />
        </div>
        <div className="transaction-container">
          <div className="add-transaction-container">
            <form className="form" onSubmit={this.onAddTransaction}>
              <h1 className="add-appointment-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitleInput}
                className="input"
                placeholder="Title"
              />
              <label htmlFor="amount" className="label">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                value={amountInput}
                onChange={this.onChangeAmountInput}
                className="input"
              />
              <label htmlFor="type" className="label">
                Type
              </label>
              <select
                id="type"
                className="input"
                onChange={this.onChangeTypeId}
                value={activeTypeId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option
                    key={eachType.optionId}
                    value={eachType.optionId}
                    className="option"
                  >
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-item-container">
            <h1>History</h1>
            <ul className="transaction-table">
              <li className="table-header">
                <p className="table-header-cell name-column">title</p>
                <hr className="separator" />
                <p className="table-header-cell">Amount</p>
                <hr className="separator" />
                <p className="table-header-cell">Type</p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
// Write your code here
