import { MAKE_GUESS_TYPE } from "../actions/game.js"

export default (state = [], action = {}) => {
    switch (action.type) {
    case MAKE_GUESS_TYPE:
        return [
            ...state, 
            action.payload
        ]
    // case "RESET":
    //     return []
    default:
        return state
    }
  }

