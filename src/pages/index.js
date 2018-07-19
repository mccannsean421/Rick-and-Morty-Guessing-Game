import React, { Component } from 'react';
import styled from 'styled-components';
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
                    <h1>Guess The Character</h1>
                    <p>Test our knowledge and see if you can name these obscure characters!</p>
                    <Link className="get-schwifty" to="/quiz">Get Schwifty</Link>
                </div>
            </IndexWrapper>
        )
    }
}

const IndexWrapper = styled.div`
    display: grid;
    height: 100%;  
    align-items: center;
    p {
        color: #fff;
        font-size: 18px;
    }

`;

export default IndexPage;