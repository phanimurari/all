import {Component} from 'react'

import './index.css'

const BOMB_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/bomb-difuser/bomb-img.png'

const BLAST =
  'https://assets.ccbp.in/frontend/react-js/bomb-difuser/bomb-blast-img.png'

const DEFUSE =
  'https://assets.ccbp.in/frontend/react-js/bomb-difuser/defuse-success-img.png '

let timerId = null

const DEFUSETEXTCONST = 'DEFUSE'

class BombDefuser extends Component {
  state = {
    inputText: '',
    isBombDefused: false,
    isTimeLimitDone: false,
    seconds: 10,
  }

  componentDidMount() {
    this.startTimer()
  }

  startTimer = () => {
    timerId = setInterval(() => {
      const {seconds} = this.state
      if (seconds === 1) {
        this.bombBlast()
      }
      this.setState({seconds: seconds - 1})
    }, 1000)
  }

  bombBlast = () => {
    this.clearTimerId()
    this.setState({isTimeLimitDone: true})
  }

  clearTimerId = () => {
    clearInterval(timerId)
  }

  onChangeInputText = event => {
    const inputText = event.target.value
    this.setState({inputText})
  }

  onKeyDownInput = event => {
    const {inputText} = this.state

    if (
      event.key === 'Enter' &&
      inputText.toLowerCase() === DEFUSETEXTCONST.toLowerCase()
    ) {
      this.defuseBomb()
      clearInterval(timerId)
    }
  }

  defuseBomb = () => {
    this.setState({isBombDefused: true})
  }

  renderTimeLeft = () => {
    const {seconds} = this.state

    if (seconds === 10) {
      return seconds
    }
    return `0${seconds}`
  }

  render() {
    const {inputText, isBombDefused, isTimeLimitDone} = this.state

    if (!isBombDefused && !isTimeLimitDone) {
      return (
        <div className="bomd-defuser-container">
          <h1>Bomb Defuser</h1>
          <input
            type="text"
            value={inputText}
            onChange={this.onChangeInputText}
            onKeyDown={this.onKeyDownInput}
          />
          <img className="img" src={BOMB_IMAGE} alt="bomb" />
          <h1>00:{this.renderTimeLeft()}</h1>
          <p>Type defuse to avoid blast</p>
        </div>
      )
    }

    if (isBombDefused && !isTimeLimitDone) {
      return (
        <div>
          <h1>Bomb Defuser</h1>
          <img className="img" src={DEFUSE} alt="defuse success" />
          <h1>Hurray!</h1>
          <p>The bomb defused successfully</p>
        </div>
      )
    }
    return (
      <div>
        <h1>Bomb Defuser</h1>
        <img className="img" src={BLAST} alt="blast" />
        <h1>Blast</h1>
      </div>
    )
  }
}

export default BombDefuser
