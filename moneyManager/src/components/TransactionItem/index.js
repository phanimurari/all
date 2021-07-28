import './index.css'

const TransactionItem = props => {
  const {title, amount, type, index, deleteItem} = props
  return (
    <>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        onClick={() => {
          deleteItem(index)
        }}
        className="delete-btn"
        testid="delete"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
        />
      </button>
    </>
  )
}

export default TransactionItem
