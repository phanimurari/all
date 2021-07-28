import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickButton = () => {}

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="number-container">
          <h1>Iam</h1>
          <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button onClick={this.onClickButton} type="button">
            Increment
          </button>
          <p>*Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
