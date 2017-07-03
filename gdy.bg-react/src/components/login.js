import React, { Component } from 'react';
import SocialLogin from 'react-social-login';

const responseFacebook = (response) => {
    console.log('Facebook response ', response);
}

const responseGoogle = (response) => {
    console.log('Google response ', response);
}

export default class Login extends Component {

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
                                    callback={responseFacebook}>
                                    <button>Login with FB</button>
                                </SocialLogin>
                            </div>
                            <div className="clear"></div>
                            <div id="customer" className="desktop-12 mobile-3">
                                <SocialLogin provider='google'
                                    appId='1005848941427-jrp5rmrl2e3qpr5t9noa2hguhpagdklr.apps.googleusercontent.com'
                                    callback={responseGoogle}>
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