// Write your code here.
import {Component} from 'react'

import './index.css'

import QuestionOption from '../QuestionOption'

class CoffeePlannerQuestion extends Component {
  state = {ActiveElement: 'none'}

  optionWasClicked = ElementId => {
    this.setState({ActiveElement: ElementId})
  }

  sendActiveElementData = () => {
    const {displayer} = this.props
    const {ActiveElement} = this.state
    displayer(ActiveElement)
  }

  render() {
    const {ActiveElement} = this.state
    const {eachCoffee} = this.props
    const {questionTitle, optionsList} = eachCoffee
    return (
      <div>
        <p>{questionTitle}</p>
        <div className="optionHolder">
          {optionsList.map(eachOption => (
            <QuestionOption
              eachOption={eachOption}
              key={eachOption.id}
              classNameForAct={
                ActiveElement === `optionNum${eachOption.id}`
                  ? 'active'
                  : 'normal'
              }
              optionWasClicked={this.optionWasClicked}
              removeBg={this.removeBg}
            />
          ))}
        </div>
        {this.sendActiveElementData()}
      </div>
    )
  }
}

export default CoffeePlannerQuestion
