import './index.css'

import {Component} from 'react'

class GoogleSuggestions extends Component {
  render() {
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>

        <div className="search-container">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input placeholder="Search Google" type="search" />
          </div>
          {}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
