import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {isLogin: false}

  changeState = () => {
    const {isLogin} = this.state

    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    const renderOutput = isLogin ? (
      <Logout changeState={this.changeState} />
    ) : (
      <Login changeState={this.changeState} />
    )

    return (
      <div className="home-container">
        <div className="login-container">{renderOutput}</div>
      </div>
    )
  }
}

export default Home
