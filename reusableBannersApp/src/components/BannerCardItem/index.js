// Write your code here.
const BannerCardItem = props => {
  const {BannerCardData} = props
  const {headerText, description, className} = BannerCardData

  return (
    <div className={`banner-card-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
