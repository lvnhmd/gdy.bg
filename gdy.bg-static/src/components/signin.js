import React, { Component } from 'react';
import SocialLogin from 'react-social-login';
import { signin } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signin extends Component {

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

                    <div className='nl-main__footer'>Will be used in accordance with our&nbsp;
                    <a href='http://www.condenast.co.uk/privacy' className='nl-main__privacy'>Privacy Policy</a>
                    </div>
                </div>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);