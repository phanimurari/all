import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithDrawAmount = value => {
    const {balance} = this.state

    this.setState({balance: balance - value})
  }

  render() {
    const {balance} = this.state

    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-container">
        <div className="cash-withdrawal-inside-container">
          <div className="profile-name-container">
            <p className="profile-image">PM</p>
            <p>Phani Murari</p>
          </div>
          <div>
            <p>Your Balance</p>
            <h1>{balance}</h1>
          </div>
        </div>
        <div className="denomination-items-container">
          <p>Withdrawal</p>
          <p>CHOOSE SUM(In Rupees)</p>
          <ul>
            {denominationsList.map(item => (
              <DenominationItem
                item={item}
                onWithDrawAmount={this.onWithDrawAmount}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
