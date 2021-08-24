import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  modeText = () => {
    const {mode} = this.state
    return mode ? 'Dark Mode' : 'Light Mode'
  }

  bgMode = () => {
    const {mode} = this.state
    return mode ? 'dark-bg' : 'light-bg'
  }

  modeSwitch = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const text = this.modeText()
    const bgMode = this.bgMode()

    return (
      <div className={`${bgMode} bg-dec`}>
        <h1 className="h-dec">Click To Change Mode</h1>
        <button className="btn-dec" type="button" onClick={this.modeSwitch}>
          {text}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
