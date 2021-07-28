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

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    transactionList: [],
    errorMessage: '',
  }

  deleteItem = index => {
    const {transactionList} = this.state
    const itemIndex = transactionList.findIndex(
      transaction => transaction.index === index,
    )
    const item = transactionList[itemIndex]
    transactionList.splice(itemIndex, 1)
    if (item.type === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        transactionList,
        balance: prevState.balance - parseInt(item.amount),
        income: prevState.income - parseInt(item.amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionList,
        balance: prevState.balance + parseInt(item.amount),
        expenses: prevState.expenses - parseInt(item.amount),
      }))
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === typeInput,
    )

    const {displayText} = typeOption

    if (!titleInput || !amountInput || !typeInput) {
      this.setState({errorMessage: 'Please Enter Valid Details'})
    } else {
      this.setState(prevState => ({
        transactionList: [
          ...prevState.transactionList,
          {
            title: titleInput,
            amount: amountInput,
            type: displayText,
            index: uuidv4(),
          },
        ],
        titleInput: '',
        amountInput: '',
        typeInput: transactionTypeOptions[0].optionId,
        errorMessage: '',
      }))
      if (typeInput === transactionTypeOptions[0].optionId) {
        this.setState(prevState => ({
          balance: prevState.balance + parseInt(amountInput),
          income: prevState.income + parseInt(amountInput),
        }))
      } else {
        this.setState(prevState => ({
          balance: prevState.balance - parseInt(amountInput),
          expenses: prevState.expenses + parseInt(amountInput),
        }))
      }
    }
  }

  render() {
    const {
      balance,
      income,
      expenses,
      titleInput,
      amountInput,
      typeInput,
      transactionList,
      errorMessage,
    } = this.state
    return (
      <div className="bg">
        <div className="header">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="bottom-container">
          <div className="form-container">
            <form className="form" onSubmit={this.onSubmit}>
              <h1>Add Transaction</h1>
              <div className="input-container">
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  placeholder="Title"
                  value={titleInput}
                  onChange={e => {
                    this.setState({titleInput: e.target.value})
                  }}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amount">AMOUNT</label>
                <input
                  id="amount"
                  placeholder="Amount"
                  value={amountInput}
                  onChange={e => {
                    this.setState({amountInput: e.target.value})
                  }}
                />
              </div>
              <div className="input-container">
                <label htmlFor="title">TYPE</label>
                <select
                  value={typeInput}
                  onChange={e => {
                    this.setState({typeInput: e.target.value})
                  }}
                >
                  {transactionTypeOptions.map(type => (
                    <option key={type.optionId} value={type.optionId}>
                      {type.displayText}
                    </option>
                  ))}
                </select>
                {errorMessage && <p>{errorMessage}</p>}
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>
            <ul className="list">
              <li className="lis-item-header">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(transaction => (
                <li key={uuidv4()}>
                  <TransactionItem
                    title={transaction.title}
                    amount={transaction.amount}
                    type={transaction.type}
                    index={transaction.index}
                    deleteItem={this.deleteItem}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
