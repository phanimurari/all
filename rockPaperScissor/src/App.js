import './App.css'
import RockPaperScissor from './RockPaperScisors'

const choicesList = [
  {
    id: 'ROCK',
    alt: 'rock',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSOR',
    alt: 'scissor',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    alt: 'paper',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => <RockPaperScissor choicesList={choicesList} />

export default App
