import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState - 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="count">Count </h1>
        <p className="count">{count}</p>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
