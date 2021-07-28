import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    num: 0,
  }

  number = () => {
    const numb = Math.floor(Math.random() * 100)
    this.setState({num: numb})
  }

  render() {
    const {num} = this.state

    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="hd"> Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.number} className="btn">
            generate
          </button>
          <h1 className="hd2">{num}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
