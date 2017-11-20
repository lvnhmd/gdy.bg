import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gotoSignin, signout } from '../actions/index';

class Greeting extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (

                <div className="n-main__covers">
                    <div className="n-main__covers__wrapper">

                        <div className="n-main__cover__offer">
                            Hi, {this.props.name} <a onClick={() => this.props.signout()}> sign out</a>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="n-main__covers">
                    <div className="n-main__covers__wrapper">

                        <div className="n-main__cover__offer">
                            Hi, stranger <a onClick={() => this.props.gotoSignin()}> sign in/sign up</a>
                        </div>
                    </div>
                </div>

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
