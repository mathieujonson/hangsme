import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
      document.title = 'Hangman - Hangs.me'
  }

  render() {
    return (
      <div>
        Hangman game coming soon!
      </div>
    )
  }
}

export default connect(
)(Home)
