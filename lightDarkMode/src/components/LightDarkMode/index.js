import {Component} from 'react'

class LightAndDarkMode extends Component {
  state = {count: 0}

  onnAccelarate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => {
        count: prevState.count + 10
      })
    }
  }

  render() {
    return <h1>Iam</h1>
  }
}

export default LightAndDarkMode
