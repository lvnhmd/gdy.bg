import React, { Component } from 'react';
import SocialLogin from 'react-social-login';
import { login } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {

    responseSocialLogin = (user, err) => {
        if (err)
            console.log('An error occured on FB login');
        else
            this.props.login(user, () => {
                console.log('CALLBACK Social login response ', user);
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <div id="content" className="row">
                <div id="customer-wrapper" className="desktop-12 mobile-3 has-background">

                    <div id="customer-background">
                        <div id="template" className="desktop-5 mobile-3">
                            <div className="clear"></div>
                            <div id="customer" className="desktop-12 mobile-3">
                                <SocialLogin provider='facebook'
                                    appId='1819960984999515'
                                    callback={this.responseSocialLogin.bind(this)}>
                                    <button>Login with FB</button>
                                </SocialLogin>
                            </div>
                            <div className="clear"></div>
                            <div id="customer" className="desktop-12 mobile-3">
                                <SocialLogin provider='google'
                                    appId='1005848941427-jrp5rmrl2e3qpr5t9noa2hguhpagdklr.apps.googleusercontent.com'
                                    callback={this.responseSocialLogin.bind(this)}>
                                    <button>Login with Google</button>
                                </SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);