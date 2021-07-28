// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  timeLimitInMinutes: 25,
  timeElapsedInSeconds: 0,
  isTimerRunning: false,
}

class DigitalTimer extends Component {
  state = initialState

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  onIncrement = () => {
    this.setState(prevState => ({
      timeLimitInMinutes: prevState.timeLimitInMinutes + 1,
    }))
  }

  onDecrement = () => {
    const {timeLimitInMinutes} = this.state

    if (timeLimitInMinutes > 1) {
      this.setState(prevState => ({
        timeLimitInMinutes: prevState.timeLimitInMinutes - 1,
      }))
    }
  }

  timerLimitControlSection = () => {
    const {timeLimitInMinutes, timeElapsedInSeconds} = this.state
    const isBtnDisabled = timeElapsedInSeconds > 0
    return (
      <div className="control-limit-section">
        <button
          className="limit-control-btn"
          type="button"
          onClick={this.onDecrement}
          disabled={isBtnDisabled}
        >
          -
        </button>
        <p className="limit-control-text">{timeLimitInMinutes}</p>
        <button
          className="limit-control-btn"
          type="button"
          onClick={this.onIncrement}
          disabled={isBtnDisabled}
        >
          +
        </button>
      </div>
    )
  }

  onClickResetBtn = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  incrementTimeInSeconds = () => {
    const {timeLimitInMinutes, timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeLimitInMinutes * 60 === timeElapsedInSeconds

    if (isTimerCompleted) {
      this.clearTimeInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onClickStartOrPauseBtn = () => {
    const {
      isTimerRunning,
      timeElapsedInSeconds,
      timeLimitInMinutes,
    } = this.state
    const isTimerCompleted = timeLimitInMinutes * 60 === timeElapsedInSeconds

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }

    if (isTimerRunning) {
      this.clearTimeInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeInSeconds, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  timerControlSection = () => {
    const {isTimerRunning} = this.state

    const pauseOrPlayImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const pauseOrPlayAltText = isTimerRunning ? 'pause icon' : 'play icon'
    const pauseOrPlayText = isTimerRunning ? 'Pause' : 'Start'

    return (
      <div className="time-control-section">
        <button
          className="control-btn"
          type="button"
          onClick={this.onClickStartOrPauseBtn}
        >
          <img
            className="control-btn-img"
            alt={pauseOrPlayAltText}
            src={pauseOrPlayImgUrl}
          />
          <p className="control-btn-text">{pauseOrPlayText}</p>
        </button>
        <button
          className="control-btn"
          type="button"
          onClick={this.onClickResetBtn}
        >
          <img
            className="control-btn-img"
            alt="reset icon"
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
          />
          <p className="control-btn-text">Reset</p>
        </button>
      </div>
    )
  }

  getTimeCounter = () => {
    const {timeElapsedInSeconds, timeLimitInMinutes} = this.state

    const totalRemainingTime = timeLimitInMinutes * 60 - timeElapsedInSeconds

    const minutes = Math.floor(totalRemainingTime / 60)
    const seconds = Math.floor(totalRemainingTime % 60)

    const formateMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formateSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${formateMinutes}:${formateSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    const timerText = isTimerRunning ? 'Running' : 'Paused'
    return (
      <div className="bg-container">
        <h1 className="Heading">Digital Timer</h1>
        <div className="clock-container">
          <div className="counter-clock-container">
            <div className="counter-clock">
              <h1 className="clock-heading">{this.getTimeCounter()}</h1>
              <p className="clock-status-text">{timerText}</p>
            </div>
          </div>
          <div className="controls-container">
            {this.timerControlSection()}
            <p className="set-limit-text">Set Timer Limit</p>
            {this.timerLimitControlSection()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
