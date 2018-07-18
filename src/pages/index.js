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
            <div>
                <Link to="/quiz">Get Schwifty</Link>
            </div>
        )
    }
}

export default IndexPage;