import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoData} = props

  return (
    <div className="cryptocurrency-container">
      <div className="column-names-container">
        <p className="coin-type">Coin Type</p>
        <div className="currency-column-div">
          <p className="currency-name">USD</p>
          <p className="currency-name">EURO</p>
        </div>
      </div>
      {cryptoData.map(crypto => (
        <CryptocurrencyItem cryptoData={crypto} key={crypto.id} />
      ))}
    </div>
  )
}

export default CryptocurrenciesList
