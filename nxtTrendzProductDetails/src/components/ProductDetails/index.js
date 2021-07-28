import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Header from '../Header'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const errorCode = 404

const STAR_IMAGE = 'https://assets.ccbp.in/frontend/react-js/star-img.png'
const NO_PRODUCT_FOUND =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png'

class ProductDetails extends Component {
  state = {isLoading: true, productDetails: {}, statusCode: 200}

  componentDidMount() {
    this.getProductDetails()
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
    <div>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderProductDetails = () => {
    const {productDetails, statusCode} = this.state

    console.log(statusCode, productDetails)

    if (statusCode === errorCode) {
      return (
        <div>
          <img
            className="error_image"
            src={NO_PRODUCT_FOUND}
            alt="no-product-found"
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
            <p testid="plus">Available : {productDetails.availability}</p>
            <p testid="minus">Brand : {productDetails.brand}</p>
            <hr />

            <div>
              <BsPlusSquare />
              <p>0</p>
              <BsDashSquare />
            </div>
            <button type="button">Add to cart</button>
          </div>
        </div>
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

export default ProductDetails
