import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './action.js';

class CountButton extends React.Component{
    onClickCountButton(count, delay){
        this.props.acts.clickAction(count, delay);
    }
    render(){
            return (
                <div>
                    <h1>{this.props.clickState.clickCount}</h1>
                    <button onClick={this.onClickCountButton.bind(this, 1, 0)}>Add by 1</button>
                    <button onClick={this.onClickCountButton.bind(this, 10, 0)}>Add by 10</button>
                    <button onClick={this.onClickCountButton.bind(this, 5, 2)}>Delay 2 second and add by 5</button>
                </div>
        )
    }
}
function mapStateToProps(state) {
    return {clickState: state.clickState};
}

function mapDispatchToProps(dispatch) {
    return {acts: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CountButton);
