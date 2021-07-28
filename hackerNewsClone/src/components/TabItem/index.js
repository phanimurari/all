const TabItem = props => {
  const {tab, onChangeActiveTab} = props

  const onClickTabItem = () => {
    onChangeActiveTab(tab.id)
  }

  return (
    <li key={tab.id}>
      <button type="button" onClick={onClickTabItem}>
        {tab.displayValue}
      </button>
    </li>
  )
}

export default TabItem
