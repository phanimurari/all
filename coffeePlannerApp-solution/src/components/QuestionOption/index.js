import {Component} from 'react'

import './index.css'

const BLUE_CUP_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
const WHITE_CUP_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'

class QuestionOption extends Component {
  onClickOption = () => {
    const {optionData, updateSelectedCoffeePlan, questionType} = this.props
    const {optionTitle} = optionData

    updateSelectedCoffeePlan(questionType, optionTitle)
  }

  render() {
    const {optionData, selectedOption} = this.props
    const {optionTitle, description} = optionData

    const isOptionSelected = optionTitle === selectedOption
    const optionClassName = isOptionSelected
      ? 'option-btn selected-option'
      : 'option-btn'
    const optionTitleClassName = isOptionSelected
      ? 'option-title selected-option-title'
      : 'option-title'
    const optionDescriptionClassName = isOptionSelected
      ? 'option-description selected-option-description'
      : 'option-description'

    return (
      <li className="option-item">
        <button
          type="button"
          className={optionClassName}
          onClick={this.onClickOption}
        >
          <span className="option-header">
            <span className={optionTitleClassName}>{optionTitle}</span>
            {isOptionSelected ? (
              <img
                src={WHITE_CUP_IMAGE}
                className="coffee-cup"
                alt="white cup"
              />
            ) : (
              <img src={BLUE_CUP_IMAGE} className="coffee-cup" alt="blue cup" />
            )}
          </span>
          <span className={optionDescriptionClassName}>{description}</span>
        </button>
      </li>
    )
  }
}

export default QuestionOption
