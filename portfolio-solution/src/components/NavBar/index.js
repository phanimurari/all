import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {navBarItems, changeActiveNavBarItem} = this.props

    return (
      <nav className="navBar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
          alt="profile pic"
        />
        <ul className="navbar-ul">
          {navBarItems.map(eachNavItem => {
            const updateState = () => changeActiveNavBarItem(eachNavItem.name)

            return (
              <li onClick={updateState} key={eachNavItem.id} className="li">
                <img
                  className="img"
                  src={eachNavItem.iconUrl}
                  alt={eachNavItem.name}
                />
                <h1>{eachNavItem.name}</h1>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default NavBar
