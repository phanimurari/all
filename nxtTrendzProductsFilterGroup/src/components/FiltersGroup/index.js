import {FcSearch} from 'react-icons/fc'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateInputValue,
    updateCategory,
    updateRating,
    clearFilters,
    activeCategoryId,
    onChangeUpdateSearchInput,
    searchValue,
  } = props
  const onChangeInputValue = event => {
    const {key} = event
    if (key === 'Enter') {
      updateInputValue()
    }
  }

  const onChangeSearchInput = event => {
    onChangeUpdateSearchInput(event.target.value)
  }

  const renderCategoryItems = each => {
    const onClickedCategory = () => updateCategory(each.categoryId)
    const activeCss = activeCategoryId === each.categoryId ? 'hightLite' : null
    return (
      <li
        key={each.categoryId}
        className={`category-list ${activeCss}`}
        onClick={onClickedCategory}
      >
        <p>{each.name}</p>
      </li>
    )
  }

  const renderRatingItems = each => {
    const onClickRating = () => updateRating(each.ratingId)
    return (
      <li
        key={each.ratingId}
        className="image-para-container"
        onClick={onClickRating}
      >
        <img
          src={each.imageUrl}
          alt={`rating-${each.ratingId}`}
          className="rating-image"
        />
        <p className="category-list">& up</p>
      </li>
    )
  }

  const onClickFilterButton = () => clearFilters()

  return (
    <div className="filters-group-container">
      <div className="input-search-img-container">
        <input
          type="search"
          className="searchElement"
          placeholder="Search"
          onKeyDown={onChangeInputValue}
          onChange={onChangeSearchInput}
          value={searchValue}
        />
        <FcSearch />
      </div>

      <div>
        <h1 className="filter-heading">Category</h1>
        <ul className="filter-ul-container">
          {categoryOptions.map(each => renderCategoryItems(each))}
        </ul>
      </div>
      <div>
        <h1 className="filter-heading">Rating</h1>
        <ul className="filter-ul-container">
          {ratingsList.map(each => renderRatingItems(each))}
        </ul>
      </div>
      <button
        className="clear-filter-button"
        type="button"
        onClick={onClickFilterButton}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
