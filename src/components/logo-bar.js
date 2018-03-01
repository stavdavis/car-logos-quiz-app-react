import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './logo-bar.css';

export function LogoBar(props) {
    return (
        <div className="logo-bar">
            So, do you know car logos?
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LogoBar);