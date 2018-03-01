import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './quiz-end-page.css';

export function QuizEndPage(props) {
    return (
        <div className="quiz-end-page">
            This is the quiz end page
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(QuizEndPage);