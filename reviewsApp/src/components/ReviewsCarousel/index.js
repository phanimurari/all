import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onIncrement = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onDecrement = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state

    const {reviewsData} = this.props

    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            onClick={this.onDecrement}
            id="leftArrow"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="leftArrow"
              className="arrow"
            />
          </button>
          <div className="user-details">
            <img
              src={reviewsData[index].imgUrl}
              alt={`${reviewsData[index].username}-avatar`}
            />
            <p className="user-name">{reviewsData[index].username}</p>
            <p className="company-name">{reviewsData[index].companyName}</p>
            <p className="review">{reviewsData[index].description}</p>
          </div>
          <button
            type="button"
            onClick={this.onIncrement}
            id="rightArrow"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="rightArrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
