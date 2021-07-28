const GameItem = props => {
  const {item, onSelectChoice} = props

  const onClickGameItem = () => {
    onSelectChoice(item.id)
  }

  return (
    <button type="button" onClick={onClickGameItem}>
      <img src={item.image} className="game-item-image" alt={item.alt} />
    </button>
  )
}

export default GameItem
