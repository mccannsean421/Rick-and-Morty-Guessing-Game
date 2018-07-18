import React, { Component } from 'react';
import styled from 'styled-components';

class Navigation extends Component {
    render() {
        return (
            <NavContainer>
                <h1>Guess That Character</h1>
            </NavContainer>
        )
    }
}

//Colros
var backgroundBlue = '#2f395d';

const NavContainer = styled.nav`
    background-color:${backgroundBlue};
    height: 60px;
    display: grid;
    align-items: center;
    h1 {
        float: left;
    }
`;

export default Navigation;