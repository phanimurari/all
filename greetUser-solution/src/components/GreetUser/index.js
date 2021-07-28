import {Component} from 'react'

import './index.css'

class GreetUser extends Component {
  state = {
    userNameInput: '',
    name: 'Chris',
  }

  onChangeUserInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onSubmitName = event => {
    const {userNameInput} = this.state
    event.preventDefault()
    this.setState({name: userNameInput, userNameInput: ''})
  }

  render() {
    const {name, userNameInput} = this.state

    return (
      <div className="greet-user-app-container">
        <div className="greet-user-container">
          <h1 className="greeting">Hello {name}!</h1>
          <form className="username-input-form" onSubmit={this.onSubmitName}>
            <label htmlFor="nameInput" className="username-input-label">
              ENTER THE NAME
            </label>
            <input
              id="nameInput"
              className="username-input"
              placeholder="Enter the name"
              value={userNameInput}
              onChange={this.onChangeUserInput}
            />
            <div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default GreetUser
