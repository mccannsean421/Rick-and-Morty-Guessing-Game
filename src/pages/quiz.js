import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';

//custom components
import AudioPlayer from './../components/AuidoPlayer';

class QuizPage extends Component {
   
    state = {
        loading: true,
        characters: [],
        correctAnswer: {},
        usedCharacters: [],
        playerScore: 0,
        turnsTaken: 0,
        gameOver: false,
        maxRounds: 20,
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
            answerCorrect,
            maxRounds
        } = this.state;
        var playerGuess = e.target.value;

        //Increment turns taken
        this.setState({
            turnsTaken: turnsTaken + 1,
        });

        //Check if game is over
        if (turnsTaken == maxRounds) {
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
                <header>
                    <div>
                        <Link to="/">
                        <Overdrive id="bender-to-big-fry">
                            <h1>Guess The Character</h1>
                        </Overdrive>
                        </Link>
                    </div>
                    <div>
                    <AudioPlayer />
                        <a href="#" className="git-link">
                            <svg viewBox="0 0 512 512">
                                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                            </svg>
                        </a>
                    </div>
                </header>                
                
                
                <div className="game">
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
                </div>
                

            </QuizWrapper>
        )
    }
}

const QuizWrapper = styled.div`
    height: 100vh;
    header {
        height: 60px;
        display: grid;
        text-align: left;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 1em;
        h1 {
            font-size: 36px;
        }
        a {
            text-decoration: none;
        }
        .git-link {
            float: right;
            svg {
                fill: #fff;
                height: 30px;
                width: 30px;
            }
        }
    }
    .game {
        display: grid;
        align-content: center;
        height: 100%;
    }
    .options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-top: 30px;
        width: 80%;
        margin: 30px auto;
        @media(max-width: 767px) {
            grid-template-columns: 1fr;
        }
        button {
            font-size: 18px;
            padding: 1em 2em;
            border: none;
            background-color: #49adb4;
            border-radius: 50em;
            color: #fff;
            cursor: pointer;
        }
    }
`;

export default QuizPage;