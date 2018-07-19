import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

class IndexPage extends Component {
    render() {
        return (
            <IndexWrapper>
                <div>
                    <Overdrive id="bender-to-big-fry">
                        <h1>Guess The Character</h1>
                    </Overdrive>
                    <p>Test our knowledge and see if you can name these obscure characters!</p>
                    <Link className="get-schwifty" to="/quiz">Get Schwifty</Link>
                </div>
            </IndexWrapper>
        )
    }
}

const IndexWrapper = styled.div`
    display: grid;
    height: 100vh;  
    align-items: center;
    p {
        color: #fff;
        font-size: 24px;
        margin-bottom: 30px;
    }
    a {
        border-radius: 50em;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 24px;
        background-color: purple;
        padding: 1em 2em;
        color: #fff;
    }

`;

export default IndexPage;