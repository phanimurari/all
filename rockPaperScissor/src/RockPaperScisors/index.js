import {Component} from 'react'

import './index.css'
import GameItem from '../GameItem'

class RockPaperScissor extends Component {
  state = {score: 0, selectedChoice: '', isPlaying: true}

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <div>
        <div>
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissor</p>
        </div>
        <div>
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
    )
  }

  onSelectChoice = selectedChoice => {
    console.log(selectedChoice)

    this.setState({selectedChoice, isPlaying: false})
  }

  renderGame = () => {
    const {choicesList} = this.props
    const gameItems = choicesList.map(item => (
      <GameItem
        item={item}
        key={item.id}
        onSelectChoice={this.onSelectChoice}
      />
    ))
    return <div className="game-items-container">{gameItems}</div>
  }

  getRandomChoiceFromList = () => {
    const {choicesList} = this.props

    const shuffledChoiceList = choicesList.sort(() => Math.random() - 0.5)

    return shuffledChoiceList[0]
  }

  renderPlayingView = () => (
    <div className="rock-paper-scissor-game-container">
      {this.renderScoreCard()}
      {this.renderGame()}
    </div>
  )

  getGameState = (choice, randomChoice) => {
    let gamesResult = 'YOU WON'

    const {score} = this.state

    console.log(choice, randomChoice)

    if (choice.id === randomChoice.id) {
      gamesResult = 'IT IS DRAW'
    } else if (
      (choice.id === 'ROCK' && randomChoice.id === 'PAPER') ||
      (choice.id === 'PAPER' && randomChoice.id === 'SCISSOR') ||
      (choice.id === 'SCISSOR' && randomChoice.id === 'ROCK')
    ) {
      gamesResult = 'YOU LOSE'
    }

    if (gamesResult === 'YOU WON') {
      this.setState({score: score + 1})
    } else if (gamesResult === 'YOU LOSE') {
      this.setState({score: score - 1})
    }
    return gamesResult
  }

  playAgain = () => {
    this.setState({selectedChoice: '', isPlaying: true})
  }

  renderGameResultView = () => {
    const {selectedChoice} = this.state
    const {choicesList} = this.props

    const choice = choicesList.filter(item => item.id === selectedChoice)

    const randomChoice = this.getRandomChoiceFromList()

    const gameState = this.getGameState(choice[0], randomChoice)

    return (
      <div>
        <p>{gameState}</p>
        <img
          src={choice[0].image}
          className="game-item-image"
          alt={choice[0].alt}
        />
        <img
          src={randomChoice.image}
          className="game-item-image"
          alt={randomChoice.alt}
        />
        <button type="button" onClick={this.playAgain}>
          Play Again
        </button>
      </div>
    )
  }

  render() {
    const {isPlaying} = this.state

    return isPlaying ? this.renderPlayingView() : this.renderGameResultView()
  }
}

export default RockPaperScissor
