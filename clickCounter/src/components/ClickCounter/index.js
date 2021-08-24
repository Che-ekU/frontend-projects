import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  IncrementFunc = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="bg-dec">
        <h1 className="h-dec">
          The Button has been clicked <br />
          <span className="counter-text">{counter}</span> times
        </h1>
        <p className="p-dec">Click the button to increase the count</p>
        <div>
          <button
            className="btn-dec"
            type="button"
            onClick={this.IncrementFunc}
          >
            click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
