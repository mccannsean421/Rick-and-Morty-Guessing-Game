import React, { Component } from 'react';
import styled from 'styled-components';

class GameOverScreen extends Component {
    state = {
        feedback: ''
    }
    
    componentDidMount() {
        var {rounds, score, answers} = this.props;
        var { feedback } = this.state;
        console.log(answers);
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
        var {rounds, score, answers} = this.props;
        var { feedback } = this.state;
        
        return (
            <GameOverWrapper>
                <h2>Score: {score} / {rounds}</h2>
                <p>
                    "{feedback}"
                </p>
                <div className="answers">
                    {
                        answers.map(answer => (
                            <div key={answer.id}>
                                <img className="characterImg" src={answer.image} alt="Character Image"></img>
                                <span>{answer.name}</span>
                                <span>{answer.correct}</span>
                            </div>
                        ))
                    }
                </div>
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
    .answers {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(auto, 200px));
        grid-gap: 20px;
        width: 80%;
        margin: 0 auto;
        .characterImg {
            width: 90%;
            margin: 0 auto;
        }
    }
    
`;

export default GameOverScreen;