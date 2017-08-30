import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../actions/single-player';

class CurrentWord extends React.Component {
    render() {
        var displayWord = this.props.word.replace(/[a-z]/g, '_')
        return (
            <div className="current-word-container">
                {displayWord}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        word: state.singlePlayer.word,
        lettersGuessed: state.singlePlayer.gameStep
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetWord: (key) => dispatch(getWord(key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWord);
