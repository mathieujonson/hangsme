import React from 'react'
import {connect} from 'react-redux'

class Multiplayer extends React.Component {
  componentDidMount() {
      document.title = 'Multiplayer - Hangs.me'
  }

  render() {
    return (
      <div>
        Multiplayer coming soon!
      </div>
    )
  }
}

export default connect(
)(Multiplayer)
