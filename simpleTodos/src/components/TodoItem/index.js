const TodoItem = props => {
  const {item, deleteTodo} = props

  const OndeleteTodo = event => {
    console.log(event.target.id)
    deleteTodo(event.target.id)
  }

  return (
    <li>
      <p>{item.title}</p>
      <button id={item.id} type="button" onClick={OndeleteTodo}>
        delete
      </button>
    </li>
  )
}
export default TodoItem
