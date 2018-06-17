
const NEW_GAME_TYPE = 'NEW_GAME'

function newGame( word ) {
    return {
        type: NEW_GAME_TYPE,
        payload: word
    }
}

const MAKE_GUESS_TYPE = "MAKE_GUESS" 

function makeGuess( letter ) {
    return {
        type: MAKE_GUESS_TYPE,
        payload: letter
    }
}

// function reSet( ) {
//     return {
//         type: "RESET",
//         payload: []
//     }
// }

module.exports = {
    NEW_GAME_TYPE,
    MAKE_GUESS_TYPE,
    newGame,
    makeGuess,
    // reSet
}