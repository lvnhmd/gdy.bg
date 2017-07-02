import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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
                                <FacebookLogin
                                    appId="1819960984999515"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    callback={responseFacebook} />
                            </div>
                            <div className="clear"></div>
                            <GoogleLogin
                                clientId="1005848941427-jrp5rmrl2e3qpr5t9noa2hguhpagdklr.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}