import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <p>
                    Made for fun By Cormac McCann using the awesome 
                    <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer"> Rick and Morty API</a>
                
                </p>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.footer`
    background: #000;
    color: #fff;
    padding: 1em;
    a {
        text-decoration: none;
        color: #49adb4;
    }
`;

export default Footer;