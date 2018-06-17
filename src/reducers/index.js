import { combineReducers } from 'redux'
import WordToGuess from "./WordToGuess"
import LettersGuessed from "./LettersGuessed"

export default combineReducers({
  WordToGuess,
  LettersGuessed
})

