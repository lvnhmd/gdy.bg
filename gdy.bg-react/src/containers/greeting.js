import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

function UserGreeting(props) {
    return (
        <ul id="cart" className="desktop-6 tablet-3 mobile-1">
            <li>
                Hi, {props.name} | <a>Logout</a>
            </li>
        </ul>
    );
}

function GuestGreeting(props) {
    return (
        <ul id="cart" className="desktop-6 tablet-3 mobile-1">
            <li>
                Hi, stranger <a>Login</a>
            </li>
        </ul>
    );
}

function Greeting(props) {
    const isAuthorised = props.isAuthorised;
    if (isAuthorised) {
        return <UserGreeting name={props.name} />;
    }
    return <GuestGreeting />;
}

function mapStateToProps(state) {
    console.log('Greeting ', state);
    var s = {
        isAuthorised: false,
        name: ''
    }

    if (state.user != null) {
        s.isAuthorised = true;
        s.name = state.user._profile.name;
    }

    return s;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
