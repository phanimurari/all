import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo()
  }

  return (
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
  )
}

export default TodoItem
