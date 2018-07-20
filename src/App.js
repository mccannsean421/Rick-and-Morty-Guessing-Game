import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

//assets
import background from './images/background.png';

//custom components
import Footer from './components/Footer';

//PAGES
import IndexPage from './pages/index';
import QuizPage from './pages/quiz';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper className="App">

          {/* MAIN CONTENT */}
          <div className="content-container">
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/quiz" component={QuizPage} />
            </Switch>
          </div>
          {/* Footer */}
          <Footer />
        </AppWrapper>
      </Router>
    );
  }
}

const AppWrapper = styled.div`
  text-align: center;
  .content-container {
    background-image: url('${background}');
    min-height: 100vh;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

`;

export default App;
