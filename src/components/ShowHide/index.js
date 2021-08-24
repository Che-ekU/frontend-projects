import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {show1: true, show2: true}

  ShowHide1 = () => {
    this.setState(prevState => ({show1: !prevState.show}))
  }

  ShowHide2 = () => {
    this.setState(prevState => ({show2: !prevState.show}))
  }

  showClassName1 = () => {
    const {show1} = this.state
    return show1 ? 'display-section' : 'hide-section'
  }

  showClassName2 = () => {
    const {show2} = this.state
    return show2 ? 'display-section' : 'hide-section'
  }

  render() {
    const showClassName1 = this.showClassName1()

    const showClassName2 = this.showClassName2()

    return (
      <div className="bg-dec">
        <h1 className="h-dec">Show/Hide</h1>
        <div>
          <div className="name-section">
            <button className="btn-dec" type="button" onClick={this.ShowHide1}>
              Show/Hide Firstname
            </button>
            <p className={`${showClassName1} p-dec`}>Ajay</p>
          </div>
          <div className="name-section">
            <button className="btn-dec" type="button" onClick={this.ShowHide2}>
              Show/Hide Lastname
            </button>
            <p className={`${showClassName2} p-dec`}>Kumar</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
