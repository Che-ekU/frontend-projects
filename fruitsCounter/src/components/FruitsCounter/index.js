import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {countM: 0, countB: 0}

  MangoCount = () => {
    this.setState(prevState => ({countM: prevState.countM + 1}))
  }

  BananaCount = () => {
    this.setState(prevState => ({countB: prevState.countB + 1}))
  }

  render() {
    const {countM, countB} = this.state

    return (
      <div className="bg-dec">
        <div className="bg2-dec">
          <h1 className="h-dec">
            Bob ate <span className="span-dec">{countM} </span> mangoes
            <span className="span-dec"> {countB} </span> bananas
          </h1>
          <div className="fruit-container">
            <div>
              <div>
                <img
                  className="img-dec"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <br />
                <button
                  className="btn-dec"
                  type="button"
                  onClick={this.MangoCount}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="img-dec"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <br />
                <button
                  className="btn-dec"
                  type="button"
                  onClick={this.BananaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
