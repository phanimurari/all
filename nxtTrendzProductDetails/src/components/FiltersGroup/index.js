import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import './index.css'

class FiltersGroup extends Component {
  renderRatingsFiltersList = () => {
    const {ratingsList} = this.props

    return ratingsList.map(rating => {
      const {changeRating} = this.props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className="and-up">& up</p>
        </li>
      )
    })
  }

  renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{this.renderRatingsFiltersList()}</ul>
    </div>
  )

  renderCategoriesList = () => {
    const {categoryOptions} = this.props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = this.props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isSelectedCategory = category.categoryId === activeCategoryId
      const categoryClassName = isSelectedCategory
        ? `category-name selected-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{this.renderCategoriesList()}</ul>
    </>
  )

  onEnterSearchInput = event => {
    const {enterSearchInput} = this.props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  onChangeSearchInput = event => {
    const {changeSearchInput} = this.props
    changeSearchInput(event.target.value)
  }

  renderSearchInput = () => {
    const {searchInput} = this.props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  render() {
    const {clearFilters} = this.props

    return (
      <div className="filters-group-container">
        {this.renderSearchInput()}
        {this.renderProductCategories()}
        {this.renderRatingsFilters()}
        <button
          type="button"
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
