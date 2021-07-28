import {Component} from 'react'

import './index.css'

class ShowHidePassword extends Component {
  state = {showPassword: false, password: ''}

  onChangePassword = event => {
    const password = event.target.value

    this.setState({password})
  }

  onChangeDisplayPassword = () => {
    const {showPassword} = this.state

    this.setState({showPassword: !showPassword})
  }

  render() {
    const {showPassword, password} = this.state

    const inputType = showPassword === true ? 'text' : 'password'

    return (
      <div className="show-hide-password-container">
        <label htmlFor="password">password</label>
        <input
          type={inputType}
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
        <div>
          <input
            id="checkbox"
            type="checkbox"
            onChange={this.onChangeDisplayPassword}
          />
          <label htmlFor="checkbox">show password</label>
        </div>
      </div>
    )
  }
}

export default ShowHidePassword
