import './index.css'

const LanguageFilterItem = props => {
  const {active, filterData, onClickUpdateTab} = props

  const onClickChangeActiveTab = () => {
    onClickUpdateTab(filterData.id)
  }
  const selectedTab = active === filterData.id ? 'selected-language' : ''

  return (
    <li
      onClick={onClickChangeActiveTab}
      className={`language-item ${selectedTab}`}
    >
      <button key={filterData.id} type="button">
        {filterData.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
