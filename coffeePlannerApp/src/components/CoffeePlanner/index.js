// Write your code here.
import {Component} from 'react'

import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    firstRow: 'none',
    secondRow: 'none',
    thirdRow: 'none',
    fourthRow: 'none',
  }

  btnClicked = () => {
    console.log('clicked')
    const {firstRow, secondRow, thirdRow, fourthRow} = this.state
    if (
      firstRow !== 'none' &&
      secondRow !== 'none' &&
      thirdRow !== 'none' &&
      fourthRow !== 'none'
    ) {
      document.getElementById('finalAnswer').textContent = 'very good selection'
    } else {
      document.getElementById('finalAnswer').textContent =
        'Kindly select options for all the questions.'
    }
  }

  displayer = argument => {
    console.log('in main displayer', argument)
    const idToAdd = parseInt(argument.slice(argument.indexOf('m') + 1), 10)
    // if (idToAdd < 3) {
    //   this.setState({firstRow: idToAdd})
    // } else if (idToAdd < 5) {
    //   this.setState({secondRow: idToAdd})
    // } else if (idToAdd < 8) {
    //   this.setState({thirdRow: idToAdd})
    // } else {
    //   this.setState({fourthRow: idToAdd})
    // }
  }

  render() {
    const {coffeePlannerList} = this.props
    return (
      <div className="bg-container">
        <div className="bg-image-holder">
          <div className="text-holder">
            <h1>Create a Plan</h1>
            <p>
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <ul className="allOptions">
          <li>
            {coffeePlannerList.map(eachCoffee => (
              <CoffeePlannerQuestion
                eachCoffee={eachCoffee}
                key={eachCoffee.id}
                displayer={this.displayer}
              />
            ))}
          </li>
        </ul>
        <button type="button" className="finalButton" onClick={this.btnClicked}>
          Create my plan
        </button>
        <p id="finalAnswer"> </p>
      </div>
    )
  }
}

export default CoffeePlanner
