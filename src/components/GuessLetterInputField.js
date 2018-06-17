import React, { Component } from 'react'
import { makeGuess } from "../actions/game.js"
import { connect } from 'react-redux'

class GuessLetterInputField extends Component {

  state = {letter:''} // a temp local state holding the currently guessed letter

  handleSubmit = (event) => {
    event.preventDefault()
    const guess = this.state.letter
    this.props.makeGuess(guess)

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Guess A Letter:
            <input
              type="text"
              name="letter"
              onChange={this.handleChange}
              value={this.state.letter}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default connect(null, {makeGuess} )( GuessLetterInputField )
