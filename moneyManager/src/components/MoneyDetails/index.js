import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="details-container">
      <div className="details-item-container balance-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div>
          <p className="item-heading">Your Balance</p>
          <p testid="balanceAmount" className="item-desc">{`Rs ${balance}`}</p>
        </div>
      </div>
      <div className="details-item-container income-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div>
          <p className="item-heading">Your Income</p>
          <p testid="incomeAmount" className="item-desc">{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="details-item-container expense-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div>
          <p className="item-heading">Your Expenses</p>
          <p
            testid="expensesAmount"
            className="item-desc"
          >{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
