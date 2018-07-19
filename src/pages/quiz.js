import React, { Component } from 'react';
import styled from 'styled-components';

//assets
import wub from './../sounds/wub.wav';
import my_man from './../sounds/my_man.wav';
import theme_song from './../sounds/theme_song.mp3';

class QuizPage extends Component {
   
    state = {
        loading: true,
        characters: [],
        correctAnswer: {},
        usedCharacters: [],
        playerScore: 0,
        turnsTaken: 0,
        gameOver: false,
        maxRounds: 10,
        answerCorrect: false
    }

    async retrieveCharacters() {
        const chars = [
            Math.floor(Math.random() * 400),
            Math.floor(Math.random() * 400),
            Math.floor(Math.random() * 400),
            Math.floor(Math.random() * 400)
        ];

        var { characters, correctAnswer, possibleAnswers, answerCorrect } = this.state;

        try {

            const res = await fetch('https://rickandmortyapi.com/api/character/'+chars);
            const characters = await res.json();
            
            const ranNum = Math.floor(Math.random() * characters.length);
            const correctAnswer = characters[ranNum];

            this.setState({
                characters: characters,
                correctAnswer: correctAnswer,
            });

        } catch (e) {
            console.error(`💣💣💣💣💣💣💣 ${e}`);
        }
    }
    
    async componentDidMount() {
        this.retrieveCharacters();
    }

    //Check to see if answer is correct
    checkAnswer = (e) => {
        var { 
            correctAnswer, 
            playerScore, 
            turnsTaken, 
            gameOver,
            answerCorrect 
        } = this.state;
        var playerGuess = e.target.value;

        //Increment turns taken
        this.setState({
            turnsTaken: turnsTaken + 1,
        });

        //Check if game is over
        if (turnsTaken >= 5) {
            this.setState({ gameOver: true });
        } else {
            if(playerGuess == correctAnswer.name) {
                this.setState({ 
                    playerScore: playerScore + 1,
                    answerCorrect: true
                });
            } 

            //Next question
            this.nextQuestion();
        }
    }

    //Next Question
    async nextQuestion() {
        this.retrieveCharacters();    
    }
    
    render() {
        var { characters, correctAnswer, gameOver, playerScore, answerCorrect } = this.state;

        return (
            <QuizWrapper>     

                {
                    gameOver == true ?
                        <div>
                            <h2>Game finished</h2>
                            <p>Score: {playerScore} / 5</p>
                        </div>
                    :
                    <div>
                        <div>
                            <img src={correctAnswer.image} alt="Character Image" />
                        </div>
                        <div className="options">
                            {
                                characters.map(character => (
                                    <button 
                                        key={character.id} 
                                        value={character.name}
                                        onClick={this.checkAnswer}
                                    >
                                        {character.name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                }

                
                <audio autoPlay loop>
                    <source src={theme_song} type="audio/wav"></source>
                </audio>
                

            </QuizWrapper>
        )
    }
}

const QuizWrapper = styled.div`
    height: 100vh;
    display: grid;
    align-items: center;
    .options {
        button {
            font-size: 18px;
            padding: 1em 2em;
            border: none;
            background-color: #49adb4;
            border-radius: 50em;
            color: #fff;
        }
    }
`;

export default QuizPage;