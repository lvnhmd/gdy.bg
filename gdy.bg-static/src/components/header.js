import React, { Component } from 'react';
import SearchField from '../containers/search_field';
import Greeting from '../containers/greeting';

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
export default class Header extends Component {


    render() {
        return (
            <div id="header" className="row">
                <div id="logo" className="desktop-6 tablet-4 mobile-1">
                    <a><img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="" style={{ border: 0 }} /></a>
                </div>
                <SearchField />
                <Greeting />
            </div>
        );
    }
}