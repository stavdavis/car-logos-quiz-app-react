import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {
    return (
        <div className="landing-page">
            This is the landing page
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingPage);