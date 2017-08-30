import ActionTypes from '../action-types';

export function singlePlayer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetWordRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: '',
                gameStep: 0
            });
        }
        case ActionTypes.GetWordRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting word.',
            });
        }
        case ActionTypes.GetWordFulfilled: {
            const word = action.word
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got word.',
                word: word,
                gameStep:1
            })
        }
        case ActionTypes.SingleGuessLetter: {
            const gameStep = state.gameStep + 1
            const lettersGuessed = state.lettersGuessed ? [action.letter].concat(state.lettersGuessed) : [action.letter]
            return Object.assign({}, state, {
                gameStep: gameStep,
                lettersGuessed: lettersGuessed
            })
        }
        default:
            return state;
    }
}