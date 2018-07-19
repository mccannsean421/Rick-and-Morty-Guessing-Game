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
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//PAGES
import IndexPage from './pages/index';
import QuizPage from './pages/quiz';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper className="App">
          
          {/* GLOBAL NAVIGATION */}
          <Navigation />

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

//colors
var mainTitleColor = '#49adb4';
var titleSubColor = '#549750';

const AppWrapper = styled.div`
  text-align: center;
  .content-container {
    background-image: url('${background}');
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  h1 {
    color: ${mainTitleColor};
    text-shadow: 2px 2px ${titleSubColor};
  }
`;

export default App;
