import {Component} from 'react'

import './index.css'

class RandomNoGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="random-generator-container">
        <div className="random-generator-inside-container">
          <h1>Random number</h1>
          <p>Generate a Random number in the range of 1 to 100</p>
          <button
            type="button"
            className="outline"
            onClick={this.generateRandomNumber}
          >
            generate
          </button>
          <h1>{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNoGenerator
