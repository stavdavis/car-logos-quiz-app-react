import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import LogoBar from './logo-bar';
import LandingPage from './landing-page';
import QuestionPage from './question-page';
import QuizEndPage from './quiz-end-page';

export class App extends React.Component {
    //DON'T FORGET to put a _redirects file in the public folder
    render() {
        return (
            <div className="app">
                <LogoBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/question-page" component={QuestionPage} />
                <Route exact path="/quiz-end-page" component={QuizEndPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(App));
