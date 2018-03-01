import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './question-page.css';

export function QuestionPage(props) {
    return (
        <div className="question-page">
            This is the question page
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(QuestionPage);