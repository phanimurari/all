import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'

import './index.css'

const PaginationFooter = props => {
  const {activePage, onDecrementPage, onIncrementPage, totalPagesCount} = props

  return (
    <div className="pagination-footer-container">
      <button type="button" testid="leftArrow" onClick={onDecrementPage}>
        <BiChevronLeft />
      </button>
      <p className="active-page">
        {activePage} of {totalPagesCount}
      </p>
      <button type="button" testid="rightArrow" onClick={onIncrementPage}>
        <BiChevronRight />
      </button>
    </div>
  )
}

export default PaginationFooter
