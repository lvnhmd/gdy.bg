import React, { Component } from 'react';
import SocialLogin from 'react-social-login';
import { signin, displayPolicy } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signin extends Component {


    click() {
        this.props.displayPolicy();
    }

    responseSocialLogin = (user, err) => {
        if (err)
            console.log('An error occured on FB signin');
        else
            this.props.signin(user, this.props.entry);
    }

    render() {
        return (
            <main className="nl-main">
                <div className="nl-main__wrapper">
                    {/* <h1 className='nl-main__title'></h1> */}
                    <p className='nl-main__content'></p>

                    <SocialLogin provider='facebook'
                        appId={process.env.REACT_APP_FB_APPID}
                        callback={this.responseSocialLogin.bind(this)}>
                        <button className='global__button-reset btn-single btn-single--light nl-form__submit'>Sign-in with FB</button>
                    </SocialLogin>

                    <SocialLogin provider='google'
                        appId={process.env.REACT_APP_GPLUS_APPID}
                        callback={this.responseSocialLogin.bind(this)}>
                        <button className='global__button-reset btn-single btn-single--light nl-form__submit'>Sign-in with Google</button>
                    </SocialLogin>

                    <div className='nl-main__footer'>Read our&nbsp;
                    <a onClick={this.click.bind(this)} className='nl-main__privacy'>Privacy Policy</a>
                    </div>
                </div>
            </main>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signin, displayPolicy }, dispatch);
}

export default connect(null, mapDispatchToProps)(Signin);