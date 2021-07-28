import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductDetails extends Component {
  state = {
    productDetails: {},
    apiStatus: apiStatusConstants.initial,
    quantity: 0,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        availability: fetchedData.availability,
        brand: fetchedData.brand,
        description: fetchedData.description,
        id: fetchedData.id,
        imageUrl: fetchedData.image_url,
        price: fetchedData.price,
        rating: fetchedData.rating,
        title: fetchedData.title,
        totalReviews: fetchedData.total_reviews,
      }
      this.setState({
        productDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderErrorView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <button type="button" className="button">
        Continue Shopping
      </button>
    </div>
  )

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 0) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderProductDetails = () => {
    const {productDetails, quantity} = this.state
    const {
      availability,
      brand,
      description,
      imageUrl,
      price,
      rating,
      title,
      totalReviews,
    } = productDetails

    return (
      <div className="product-details-container">
        <img src={imageUrl} alt="product" className="product-image" />
        <div className="product">
          <h1 className="product-name">{title}</h1>
          <p className="price">Rs {price}/-</p>
          <div className="rating-and-reviews-count">
            <div className="rating-container">
              <p className="rating">{rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
            <p className="reviews-count">{totalReviews} Reviews</p>
          </div>
          <p className="product-description">{description}</p>
          <div className="label-value-container">
            <p className="label">Available:</p>
            <p className="value">{availability}</p>
          </div>
          <div className="label-value-container">
            <p className="label">Brand:</p>
            <p className="value">{brand}</p>
          </div>
          <hr className="horizontal-line" />
          <div className="quantity-container">
            <button
              type="button"
              className="quantity-controller-button"
              onClick={this.onDecrementQuantity}
              testid="minus"
            >
              <BsDashSquare color="#616e7c" size={16} />
            </button>
            <p className="quantity">{quantity}</p>
            <button
              type="button"
              className="quantity-controller-button"
              onClick={this.onIncrementQuantity}
              testid="plus"
            >
              <BsPlusSquare color="#616e7c" size={16} />
            </button>
          </div>
          <button type="button" className="button add-to-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetails()
      case apiStatusConstants.failure:
        return this.renderErrorView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="product-details-route-container">
          {this.renderApiStatusView()}
        </div>
      </>
    )
  }
}

export default ProductDetails
