import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {subscribed: false}

  btnCreate = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  btnText = () => {
    const {subscribed} = this.state
    return subscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.btnText()

    return (
      <div className="bg-dec">
        <h1 className="h-dec">Welcome</h1>
        <p className="p-dec">Thank you! Happy Learning</p>
        <button className="btn-dec" type="button" onClick={this.btnCreate}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
