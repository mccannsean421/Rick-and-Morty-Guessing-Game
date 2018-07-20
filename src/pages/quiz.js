import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';

//custom components
import AudioPlayer from './../components/AuidoPlayer';
import GameOverScreen from './../components/GameOverScreen';

class QuizPage extends Component {
   
    state = {
        loading: true,
        characters: [],
        correctAnswer: {},
        usedCharacters: [],
        playerScore: 0,
        turnsTaken: 1,
        gameOver: false,
        maxRounds: 20,
        answerCorrect: false,
    }

    async retrieveCharacters() {
        const chars = [
            Math.ceil(Math.random() * 400),
            Math.ceil(Math.random() * 400),
            Math.ceil(Math.random() * 400),
            Math.ceil(Math.random() * 400)
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

        //Input value
        var playerGuess = e.target.value;

        //Increment turns taken
        this.setState({
            turnsTaken: turnsTaken + 1,
        });

        //Check if game is over
        if (turnsTaken < maxRounds) {
            if(playerGuess == correctAnswer.name) {
                this.setState({ 
                    playerScore: playerScore + 1,
                    answerCorrect: true
                });
            } 

            //Next question
            this.nextQuestion();
        } else {
            //End game
            this.setState({ gameOver: true });
        }
    }
    

    //Next Question
    async nextQuestion() {
        this.retrieveCharacters();    
    }
    
    render() {
        var { characters, correctAnswer, gameOver, playerScore, answerCorrect, maxRounds } = this.state;

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
                    <div className="audio-container">
                        <AudioPlayer />
                    </div>
                </header>                
                
                
                <div className="game">
                {
                    gameOver == true ?
                        <GameOverScreen rounds={maxRounds} score={playerScore} />
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
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    header {
        height: auto;
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
        .audio-container {
            display: grid;
            justify-items: end;
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