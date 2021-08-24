import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  AccelerateFunc = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  DecelerateFunc = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-dec">
        <div>
          <h1 className="h-dec">SPEEDOMETER</h1>
        </div>
        <div>
          <img
            className="img-dec"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="oops"
          />
        </div>
        <div>
          <h1 className="h2-dec">Speed is {speed}mph</h1>
          <p className="p-dec">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="btn-dec btn1-dec"
              type="button"
              onClick={this.AccelerateFunc}
            >
              Accelerate
            </button>
            <button
              className="btn-dec btn2-dec"
              type="button"
              onClick={this.DecelerateFunc}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
