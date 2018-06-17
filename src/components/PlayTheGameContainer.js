import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showGuess, randomWord, wrongGuessCount, wrongGuessLimit } from "../lib/game"
import GuessLetterInputField from "./GuessLetterInputField"
import { newGame } from "../actions/game"

class PlayTheGameContainer extends Component { 

    componentDidMount() {
        let word = randomWord()
        this.props.newGame(word)
    }

    render() {
        return (
            <div>
                <br/>
                <div>
                    <p> Here's a random word from our dictionary. Try to guess it! </p>
                    <p> {showGuess(this.props.wordToGuess, this.props.lettersGuessed)} </p>
                    <p> Wrong guesses: {wrongGuessCount(this.props.wordToGuess, this.props.lettersGuessed)} </p>
                    <p> {wrongGuessLimit(this.props.wordToGuess, this.props.lettersGuessed)} </p>
                </div>
                <br/>
                <GuessLetterInputField />
                <br/>
                <div>
                    <Link to="/"> Go Back To Homepage </Link>
                </div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wordToGuess: state.WordToGuess,
        lettersGuessed: state.LettersGuessed
    }
}

export default connect( mapStateToProps, {newGame} )( PlayTheGameContainer )