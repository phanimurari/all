import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {euroValue, usdValue, currencyLogoUrl, currencyName} = cryptoData

  return (
    <div className="coins-values-container">
      <div className="coin-type-container">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-img"
        />
        <p className="coin">{currencyName}</p>
      </div>
      <div className="currency-value-div">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
