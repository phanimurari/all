// Write your code here.
import {Component} from 'react'

import './index.css'

class QuestionOption extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {selectedOptionId: 'None'}
  //   }

  optionSelected = event => {
    // console.log(event.target)
    const {optionWasClicked} = this.props
    optionWasClicked(event.target.id)
  }

  render() {
    // const {selectedOptionId} = this.state
    // console.log('present', selectedOptionId)
    const {eachOption, classNameForAct} = this.props
    const {id, optionTitle, description} = eachOption
    return (
      <li
        className={`options ${classNameForAct}`}
        id={`optionNum${id}`}
        onClick={this.optionSelected}
      >
        <div className="titleAndImageHolder">
          <p className="optionTitle">{optionTitle}</p>
          <div>
            <img
              className="blueCup"
              src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
              alt="blue cup"
            />
          </div>
        </div>
        <p>{description}</p>
      </li>
    )
  }
}

export default QuestionOption
