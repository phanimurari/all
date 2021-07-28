import {Component} from 'react'

import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedCoffeePlan: {
      DRINK_TYPE: '',
      COFFEE_TYPE: '',
      QUANTITY: '',
      GRIND_TYPE: '',
      DELIVER_TYPE: '',
    },
    showSummary: false,
  }

  setShowSummary = value => {
    this.setState({showSummary: value})
  }

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state

    if (
      selectedCoffeePlan.DRINK_TYPE !== '' &&
      selectedCoffeePlan.COFFEE_TYPE !== '' &&
      selectedCoffeePlan.QUANTITY !== '' &&
      selectedCoffeePlan.GRIND_TYPE !== '' &&
      selectedCoffeePlan.DELIVER_TYPE !== ''
    ) {
      return true
    }

    return false
  }

  renderSummarySection = () => {
    const {selectedCoffeePlan, showSummary} = this.state

    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              I Drink my coffee as
              <span className="selected-value">
                {` ${selectedCoffeePlan.DRINK_TYPE}`}
              </span>
              , with a
              <span className="selected-value">
                {` ${selectedCoffeePlan.COFFEE_TYPE} `}
              </span>
              type of bean.
              <span className="selected-value">
                {` ${selectedCoffeePlan.QUANTITY} `}
              </span>
              of
              <span className="selected-value">
                {` ${selectedCoffeePlan.GRIND_TYPE} `}
              </span>
              ground, send to me
              <span className="selected-value">
                {` ${selectedCoffeePlan.DELIVER_TYPE}`}
              </span>
              .
            </p>
          ) : (
            <p className="summary">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    return null
  }

  updateSelectedCoffeePlan = (questionType, optionTitle) => {
    const {selectedCoffeePlan} = this.state
    const newSelectedCoffeePlan = {...selectedCoffeePlan}

    newSelectedCoffeePlan[questionType] = optionTitle
    this.setState({selectedCoffeePlan: newSelectedCoffeePlan})
    this.setShowSummary(false)
  }

  getSelectedOption = questionType => {
    const {selectedCoffeePlan} = this.state

    return selectedCoffeePlan[questionType]
  }

  renderCoffeePlannerQuestions = () => {
    const {coffeePlannerList} = this.props

    return (
      <ul className="coffee-planner-questions-list">
        {coffeePlannerList.map(coffeeQuestion => (
          <CoffeePlannerQuestion
            getSelectedOption={this.getSelectedOption}
            key={coffeeQuestion.id}
            questionData={coffeeQuestion}
            updateSelectedCoffeePlan={this.updateSelectedCoffeePlan}
          />
        ))}
      </ul>
    )
  }

  onClickCreateMyPlan = () => {
    this.setShowSummary(true)
  }

  renderBodySection = () => (
    <div className="coffee-planner-body">
      {this.renderCoffeePlannerQuestions()}
      <div className="button-container">
        <button
          type="button"
          className="create-my-plan-button"
          onClick={this.onClickCreateMyPlan}
        >
          Create my plan
        </button>
      </div>
      {this.renderSummarySection()}
    </div>
  )

  renderHeaderSection = () => (
    <div className="header-section">
      <div className="coffee-planner-details-container">
        <h1 className="heading">Create a Plan</h1>
        <p className="description">
          We offer an assortment of the best artesian coffees from the globe
          delivered fresh to the door create your plan with this
        </p>
      </div>
    </div>
  )

  render() {
    return (
      <div className="app-container">
        {this.renderHeaderSection()}
        {this.renderBodySection()}
      </div>
    )
  }
}

export default CoffeePlanner
