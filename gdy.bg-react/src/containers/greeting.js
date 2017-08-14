import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gotoSignin, signout } from '../actions/index';

class Greeting extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (<ul id="cart" className="desktop-6 tablet-3 mobile-1">
                <li>
                    Hi, {this.props.name} <a onClick={() => this.props.signout()}> sign out</a>
                </li>
            </ul>)
        }
        else {
            return (<ul id="cart" className="desktop-6 tablet-3 mobile-1">
                <li>
                    Hi, stranger <a onClick={() => this.props.gotoSignin()}> sign in</a>
                </li>
            </ul>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.isAuthenticated,
        name: state.user.name
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ gotoSignin, signout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
