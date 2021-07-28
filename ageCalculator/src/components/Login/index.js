import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

const apiKey = 'd521585822a0db307382160dbcd2abf7'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMessage: false, errorMsg: ''}

  onLoginSuccess = token => {
    const {username, password} = this.state

    const {history} = this.props

    const userDetails = {username, password}

    localStorage.setItem('userDetails', JSON.stringify(userDetails))

    Cookies.set('access_token', token, {expires: 30})

    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const getRequestTokenApi = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`
    const getRequestTokenOptions = {
      method: 'GET',
    }
    const getRequestToken = await fetch(
      getRequestTokenApi,
      getRequestTokenOptions,
    )
    const data = await getRequestToken.json()
    const userDetails = {username, password, request_token: data.request_token}

    const postLoginApi = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`
    const postLoginOptions = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const loginResponse = await fetch(postLoginApi, postLoginOptions)
    const loginData = await loginResponse.json()

    if (loginData.success === false) {
      this.onLoginFailure(loginData.status_message)
    } else {
      this.onLoginSuccess(loginData.request_token)
    }
  }

  onChangeInput = event => {
    this.setState({username: event.target.value, showErrorMessage: false})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, showErrorMessage: false})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="password-container">
        <label htmlFor="passwordElement" className="label-element">
          PASSWORD
        </label>
        <input
          onChange={this.onChangePassword}
          placeholder="Password"
          value={password}
          type="password"
          id="passwordElement"
          className="input-element"
        />
      </div>
    )
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <div className="username-container">
        <label htmlFor="inputElement" className="label-element">
          USERNAME
        </label>
        <input
          onChange={this.onChangeInput}
          placeholder="Username"
          value={username}
          type="text"
          id="inputElement"
          className="input-element"
        />
      </div>
    )
  }

  render() {
    const {showErrorMessage, errorMsg} = this.state

    const accessToken = Cookies.get('access_token')

    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <img
          alt="movies-img"
          className="website-logo"
          src="https://res.cloudinary.com/breakingbad/image/upload/v1626011241/Group_7399_cl6qfz.png"
        />
        <form
          className="login-form-container"
          onSubmit={this.onSubmitUserDetails}
        >
          <h1 className="form-heading">Sign in</h1>
          {this.renderUsername()}
          {this.renderPassword()}
          {showErrorMessage && <p className="error-message">{errorMsg}</p>}
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
