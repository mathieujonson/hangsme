import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCurrent, saveTodo} from '../../reducers/todo'

class Multiplayer extends Component {
  // handleInputChange = (evt) => {
  //   const val = evt.target.value
  //   this.props.updateCurrent(val)
  // }
  //
  // handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   this.props.saveTodo(this.props.currentTodo)
  // }

  render() {
    //const {currentTodo} = this.props
    return (
      <div>
        Multiplayer
      </div>
    )
  }
}

export default connect(
  (state) => ({currentTodo: state.todo.currentTodo}),
  {updateCurrent, saveTodo}
)(Multiplayer)
