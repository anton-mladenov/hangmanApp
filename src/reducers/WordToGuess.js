import { NEW_GAME_TYPE } from "../actions/game.js"

export default (state = "", action = {}) => {
    switch (action.type) {
    case NEW_GAME_TYPE:
        return action.payload
    default:
        return state
    }
  }


