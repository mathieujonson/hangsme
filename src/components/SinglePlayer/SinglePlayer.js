import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../actions/single-player';
import NewSingle from './new-single'
import GameBoard from './game-board'

class SinglePlayer extends React.Component {
    componentDidMount() {
        // Update page title
        document.title = 'Single player - Hangs.me'
    }

    render() {

        let markup = null;

        switch(this.props.gameStep) {
            case 0:
                markup = <NewSingle />
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                markup = <GameBoard />
                break;
            default:
                markup = "Unknown game state!"
        }
        return (
            <div className="single-player">
                <h2>Single Player</h2>
                {markup}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        word:     state.singlePlayer.word,
        gameStep: state.singlePlayer.gameStep
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetWord: (key) => dispatch(getWord(key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);
