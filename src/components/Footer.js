import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <p>
                    Made for fun By Cormac McCann using the awesome 
                    <a href="https://rickandmortyapi.com/" target="_blank"> Rick and Morty API</a>
                
                </p>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.footer`
    a {
        text-decoration: none;
    }
`;

export default Footer;