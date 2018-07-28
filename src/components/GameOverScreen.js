import React, { Component } from 'react';
import styled from 'styled-components';

class GameOverScreen extends Component {
    state = {
        feedback: ''
    }
    
    componentDidMount() {
        var {rounds, score, answers} = this.props;
        var { feedback } = this.state;

        if( score < 3 ) {
            this.setState({
                feedback: "Why aren't you more ashamed of yourself?"
            });
        }
        else if (score < 8) {
            this.setState({
                feedback: "Man, you are the Red Grin Grumblr of pretending you know what's going on..."
            });
        }
        else if (score < 10) {
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
                            <AnswerWrapper 
                                key={answer.id}
                                backgroundImg={answer.image}
                            >
                                <div className="answer-status">
                                    <div>
                                        { answer.correct ? 
                                            <div className="icon correct">
                                                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><title>2</title><path d="M50,11.9A38.1,38.1,0,1,0,88.1,50,38.2,38.2,0,0,0,50,11.9ZM69,41.1,46.6,63.2a3.2,3.2,0,0,1-2.1.8h-.1a2.7,2.7,0,0,1-2.1-.9L30.9,50.9a3.1,3.1,0,0,1,.2-4.3,3,3,0,0,1,4.2.2l9.3,9.9L64.7,36.8a3.1,3.1,0,0,1,4.3.1A3,3,0,0,1,69,41.1Z"></path></svg>
                                            </div>
                                            : 
                                            <div className="icon wrong">
                                                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 98 98" x="0px" y="0px"><title>20</title><path d="M49,15h0a34,34,0,0,0,0,68h0a34,34,0,0,0,0-68ZM62.6,52H52V62.8A3.2,3.2,0,0,1,49,66h0a3.1,3.1,0,0,1-3-3.2V52H35.4a3,3,0,0,1-3-3,2.9,2.9,0,0,1,3-3H46V35.2A3.2,3.2,0,0,1,49,32h0a3.1,3.1,0,0,1,3,3.2V46H62.6a3,3,0,0,1,3,3A2.9,2.9,0,0,1,62.6,52Z"></path></svg>
                                            </div>
                                        }
                                        <span>{answer.name}</span>
                                    </div>
                                </div>
                            </AnswerWrapper>
                        ))
                    }
                </div>
            </GameOverWrapper>
        );
    }
}

const AnswerWrapper = styled.div`
    height: 150px;
    width: 100%;
    margin: 0 auto;
    background-image: url('${props => props.backgroundImg}');
    background-size: cover;
    background-position: center;
    .answer-status {
        background-color: rgba(0,0,0,0.5);
        height: 100%;
        display: grid;
        align-content: center;
        .icon {
            max-width: 60px;
            margin: 0 auto;
        }
         .wrong {
             svg {
                fill: red;
                transform: rotate(45deg);
             }
             
         }
         .correct {
             svg {
                fill: #39ff39;
             }
         }
    }
`;

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
        margin: 2em auto;
        justify-content: center;
    }
    
`;

export default GameOverScreen;