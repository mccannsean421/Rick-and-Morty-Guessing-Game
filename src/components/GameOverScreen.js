import React, { Component } from 'react';
import styled from 'styled-components';

class GameOverScreen extends Component {
    state = {
        ratings: [
            "Why aren't you more ashamed of yourself?",
            "Man, you are the Red Grin Grumblr of pretending you know what's going on...",
            "Okay, don't break an arm jerking yourself off...."
        ]
    }
    
    render() {
        var {rounds, score} = this.props;
        
        return (
            <GameOverWrapper>
                <h2>Score: {score} / {rounds}</h2>
                <p></p>
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