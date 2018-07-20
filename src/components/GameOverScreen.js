import React, { Component } from 'react';
import styled from 'styled-components';

class GameOverScreen extends Component {
    state = {
        feedback: ''
    }
    
    componentDidMount() {
        var {rounds, score} = this.props;
        var { feedback } = this.state;

        if( score < 10 ) {
            this.setState({
                feedback: "Why aren't you more ashamed of yourself?"
            });
        }
        else if (score < 15) {
            this.setState({
                feedback: "Man, you are the Red Grin Grumblr of pretending you know what's going on..."
            });
        }
        else if (score < 20) {
            this.setState({
                feedback: "Okay, don't break an arm jerking yourself off...."
            });
        }
    }

    render() {
        var {rounds, score} = this.props;
        var { feedback } = this.state;
        
        return (
            <GameOverWrapper>
                <h2>Score: {score} / {rounds}</h2>
                <p>
                    "{feedback}"
                </p>
            </GameOverWrapper>
        );
    }
}

const GameOverWrapper = styled.div`
    color: #fff;
    h2 {
        font-size: 36px;
    }
    p {
        font-size: 24px;
    }
    
`;

export default GameOverScreen;