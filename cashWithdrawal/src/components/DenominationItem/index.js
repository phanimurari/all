const DenominationItem = props => {
  const {item} = props

  const onClickWithDrawAmount = () => {
    const {onWithDrawAmount} = props
    onWithDrawAmount(item.value)
  }

  return (
    <li>
      <button type="button" onClick={onClickWithDrawAmount}>
        {item.value}
      </button>
    </li>
  )
}

export default DenominationItem
