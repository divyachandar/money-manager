// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount, balanceAmount} = props
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="balance-card">
          <p className="money-description">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs{balanceAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="balance-card">
          <p className="money-description">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs{incomeAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="balance-card">
          <p className="money-description">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs{expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
