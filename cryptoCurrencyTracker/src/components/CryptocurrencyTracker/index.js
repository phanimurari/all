import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrencyData: [], stillLoading: true}

  componentDidMount() {
    this.getConvertedCryptoCurrencyData()
  }

  getConvertedCryptoCurrencyData = async () => {
    const API_URL = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    const cryptoData = data.map(item => ({
      id: item.id,
      currencyLogoUrl: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      usdValue: item.usd_value,
    }))
    this.setState({cryptocurrencyData: cryptoData, stillLoading: false})
  }

  renderCryptoDataUi = () => {
    const {cryptocurrencyData} = this.state

    return (
      <div className="container">
        <div className="heading-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
        </div>
        <div className="banner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="Cryptocurrency Tracker"
            className="banner"
          />
        </div>
        <CryptocurrenciesList cryptoData={cryptocurrencyData} />
      </div>
    )
  }

  renderLoaderAnimation = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={100} width={100} />
    </div>
  )

  render() {
    const {stillLoading} = this.state

    return (
      <div className="content-body">
        {stillLoading
          ? this.renderLoaderAnimation()
          : this.renderCryptoDataUi()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
