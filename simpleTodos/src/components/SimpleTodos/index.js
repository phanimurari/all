import {Component} from 'react'
import TodoItem from '../TodoItem/index'

class SimpleTodos extends Component {
  state = {todosList: []}

  componentDidMount() {
    const {initialTodosList} = this.props
    this.setState({todosList: initialTodosList})
  }

  deleteTodo = itemId => {
    const {todosList} = this.state
    const filteredTodos = todosList.filter(item => {
      if (item.id === Number(itemId)) {
        console.log(item.id)
        return null
      }

      return item
    })

    this.setState({todosList: filteredTodos})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="todos-container">
        <h1>simple Todos</h1>
        <ul>
          {todosList.map(item => (
            <TodoItem key={item.id} item={item} deleteTodo={this.deleteTodo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
