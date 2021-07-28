import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Header from '../Header'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import SimilarProductItem from '../SimilarProductItem'

const errorCode = 404

const STAR_IMAGE = 'https://assets.ccbp.in/frontend/react-js/star-img.png'
const NO_PRODUCT_FOUND =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png'

class ProductItemDetails extends Component {
  state = {isLoading: true, productDetails: {}, statusCode: 200, quantity: 1}

  componentDidMount() {
    this.getProductDetails()
  }

  onIncreaseQunatity = () => {
    const {quantity} = this.state

    this.setState({quantity: quantity + 1})
  }

  onDecreaseQuantity = () => {
    const {quantity} = this.state

    if (quantity > 1) {
      this.setState({quantity: quantity - 1})
    }
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    this.setState({
      productDetails: data,
      isLoading: false,
      statusCode: data.status_code,
    })
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSimilarProducts = () => {
    const {productDetails} = this.state
    const similarProducts = productDetails.similar_products

    return (
      <div>
        <h1>Similar products</h1>
        {similarProducts.map(product => (
          <SimilarProductItem product={product} key={product.id} />
        ))}
      </div>
    )
  }

  renderProductDetails = () => {
    const {productDetails, statusCode, quantity} = this.state

    if (statusCode === errorCode) {
      return (
        <div>
          <img
            className="error_image"
            src={NO_PRODUCT_FOUND}
            alt="error view"
          />
          <h1>Product Not Found</h1>
          <button type="button">Continue Shopping</button>
        </div>
      )
    }
    return (
      <>
        <Header />
        <div className="product-details-container">
          <div>
            <img
              className="product-image"
              src={productDetails.image_url}
              alt="product"
            />
          </div>
          <div>
            <h1>{productDetails.title}</h1>
            <p>{productDetails.price}</p>
            <p className="star-container">
              <span>{productDetails.rating}</span>
              <img src={STAR_IMAGE} alt="star" />
            </p>

            <p>{productDetails.total_reviews} Reviews</p>

            <p>{productDetails.description}</p>
            <p>Available : {productDetails.availability}</p>
            <p>Brand : {productDetails.brand}</p>
            <hr />

            <div>
              <button
                type="button"
                testid="plus"
                onClick={this.onIncreaseQunatity}
              >
                <BsPlusSquare />
              </button>
              <p>{quantity}</p>
              <button
                type="button"
                testid="minus"
                onClick={this.onDecreaseQuantity}
              >
                <BsDashSquare />
              </button>
            </div>
            <button type="button">Add to cart</button>
          </div>
        </div>
        {this.renderSimilarProducts()}
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    if (isLoading) {
      return this.renderLoader()
    }
    return this.renderProductDetails()
  }
}

export default ProductItemDetails
