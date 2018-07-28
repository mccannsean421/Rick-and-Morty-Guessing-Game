import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import {
    Link,
  } from 'react-router-dom';

class IndexPage extends Component {
    render() {
        return (
            <IndexWrapper>

                <Overdrive id="bender-to-big-fry">
                    <h1>Guess The Character</h1>
                </Overdrive>

                <div className="content-wrap">
                    <div>
                    <p>Test your Rick & Morty knowledge and see if you can name these obscure characters!</p>
                    <Link className="get-schwifty" to="/quiz">Get Schwifty</Link>
                    </div>
                </div>

            </IndexWrapper>
        )
    }
}

const IndexWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: start;
    @media(min-width: 767px) {
        
        align-items: center;
    }

    .content-wrap {
        display: grid;
        align-content: center;
        p {
            color: #fff;
            font-size: 24px;
            margin: 3em auto;
        }
        a {
            border-radius: 50em;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 24px;
            background-color: #49adb4;
            padding: 1em 2em;
            color: #fff;
        }    
    }


`;

export default IndexPage;