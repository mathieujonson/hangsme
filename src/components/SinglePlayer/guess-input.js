import React from 'react';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/single-player';
import { sendFlashMessage} from '../../actions/flash-message';

class GuessInput extends React.Component {
    updateDisplay(e) {
        // The letter guessed
        var value = e.target.value.toLowerCase()

        if(typeof this.props.lettersGuessed === 'object'){
            console.log("indexOf",Object.values(this.props.lettersGuessed).indexOf(value));
        }
        // The letter isn't a letter
        if(!/[a-z]/i.test(value)) {
            this.props.sendFlashMessage(`That isn't a letter`)
            console.log('not a letter')
        }
        // The letter has already been guessed
        else if(typeof this.props.lettersGuessed === 'object' && Object.values(this.props.lettersGuessed).indexOf(value) >= 0) {
             this.props.sendFlashMessage(`You already guessed that letter`)
             console.log('already guessed');
        }
        else {
            // Clear any messages
            this.props.sendFlashMessage('')
            // Process the letter
            this.props.onGuessLetter(value)
        }

        // Clear the input
        e.target.value = ''
    }

    render() {
        return (
            <div className="guess-letter-container">
                <label for="guess-input">Guess a letter:</label>
                <input type="text" onInput={this.updateDisplay.bind(this)} className="guess-input" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        word: state.singlePlayer.word,
        lettersGuessed: state.singlePlayer.lettersGuessed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGuessLetter: (letter) => dispatch(guessLetter(letter)),
        sendFlashMessage: (message) => dispatch(sendFlashMessage(message))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessInput);
