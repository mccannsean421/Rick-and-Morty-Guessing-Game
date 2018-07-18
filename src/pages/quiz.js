import React, { Component } from 'react';
import styled from 'styled-components';

class QuizPage extends Component {
   
    state = {
        loading: true,
        character: {},
        possibleAnswers: [],
        playerScore: 0,
    }
    
    async componentDidMount() {

        var { character, possibleAnswers } = this.state;

        try {

            const res = await fetch('https://rickandmortyapi.com/api/character/234');
            const character = await res.json();
            this.setState({
                character: character,
            })

        } catch (e) {
            console.error(`💣💣💣💣💣💣💣 ${e}`);
        }
    }

    //Check to see if answer is correct
    checkAnswer = () => {

    }
    
    render() {
        var { character, possibleAnswers } = this.state;

        return (
            <QuizWrapper>                
                <div>
                    <img src={character.image} alt="Character Image" />
                    <div>
                    {possibleAnswers.map(answer => (
                        <button>{answer}</button>
                    ))}
                    </div>
                </div>
            </QuizWrapper>
        )
    }
}

const QuizWrapper = styled.div`
    margin: 1em;
`;

export default QuizPage;