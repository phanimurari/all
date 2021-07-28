// Write your code here.
import './index.css'
import {Component} from 'react'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  answer = () => {
    const {faqData} = this.props
    const {answerText} = faqData
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="ans-desc">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggle}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqData} = this.props
    const {questionText} = faqData
    return (
      <li>
        <div className="question-container">
          <h1 className="question-head">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.answer()}
      </li>
    )
  }
}
export default FaqItem
