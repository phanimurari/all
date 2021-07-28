import {Component} from 'react'

import './index.css'

class StrikeThroughText extends Component {
  state = {isChecked: false}

  onCheckCheckbox = () => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
  }

  render() {
    const {isChecked} = this.state

    const strikeThroughClassName = isChecked
      ? 'strike-through'
      : 'no-strike-through'

    return (
      <div className="checkbox-container">
        <div className="checkbox-inside-container">
          <input
            id="checkbox"
            type="checkbox"
            onChange={this.onCheckCheckbox}
          />
          <label htmlFor="checkbox" className={strikeThroughClassName}>
            Get out of bed
          </label>
        </div>
      </div>
    )
  }
}

export default StrikeThroughText
