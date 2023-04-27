// Write your code here
// test case failed
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="table-row">
      <div className="table-cell title-column">
        <p>{title}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell amount-column">
        <p className="amount">Rs {amount}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell type-column">
        <p className="type">{type}</p>
        <button
          onClick={onDeleteTransaction}
          type="button"
          className="delete-icon-container"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
