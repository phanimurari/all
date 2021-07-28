import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'ÏNPROGRESS',
}

const initial = {
  productsList: [],
  activeApiStatus: apiStatus.initial,
  activeOptionId: sortbyOptions[0].optionId,
  searchValue: '',
  activeCategoryId: '',
  aciveRatingId: '',
}

class AllProductsSection extends Component {
  state = initial

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      activeApiStatus: apiStatus.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {
      activeOptionId,
      searchValue,
      activeCategoryId,
      aciveRatingId,
    } = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchValue}&rating=${aciveRatingId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        activeApiStatus: apiStatus.success,
      })
    } else {
      this.setState({activeApiStatus: apiStatus.failure})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state
    const showNoProductsList = productsList.length > 0

    // TODO: Add No Products View
    const result = showNoProductsList ? (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          alt="no products"
          className="no-products-img"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-para">
          We could not find any products. Try other filters.
        </p>
      </div>
    )
    return result
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view
  renderFailureView = () => {
    console.log('failed')
    return (
      <div className="failure-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="products failure"
          className="failure-image"
        />
        <h1 className="error-heading">Oops! Something went to wrong</h1>
        <p className="error-para">
          We are having some trouble processing your request. please try again.
        </p>
      </div>
    )
  }

  updateInputValue = () => {
    this.getProducts()
  }

  updateCategory = value => {
    this.setState({activeCategoryId: value}, this.getProducts)
  }

  updateRating = value => {
    this.setState({aciveRatingId: value}, this.getProducts)
  }

  renderApiStatus = () => {
    const {activeApiStatus} = this.state
    switch (activeApiStatus) {
      case apiStatus.success:
        return this.renderProductsList()
      case apiStatus.failure:
        return this.renderFailureView()
      case apiStatus.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  clearFilters = () => {
    this.setState(initial, this.getProducts)
  }

  onChangeUpdateSearchInput = value => {
    this.setState({searchValue: value})
  }

  render() {
    const {activeCategoryId} = this.state
    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          updateInputValue={this.updateInputValue}
          updateCategory={this.updateCategory}
          updateRating={this.updateRating}
          clearFilters={this.clearFilters}
          activeCategoryId={activeCategoryId}
          onChangeUpdateSearchInput={this.onChangeUpdateSearchInput}
        />
        {this.renderApiStatus()}
      </div>
    )
  }
}

export default AllProductsSection
