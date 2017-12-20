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
            // <div id="content" className="row">
            //     <div id="customer-wrapper" className="desktop-12 mobile-3 has-background">

            //         <div id="customer-background">
            //             <div id="template" className="desktop-5 mobile-3">
            //                 <div className="clear"></div>
            //                 <div id="customer" className="desktop-12 mobile-3">
            //                     <SocialLogin provider='facebook'
            //                         appId={process.env.REACT_APP_FB_APPID}
            //                         callback={this.responseSocialLogin.bind(this)}>
            //                         <button>Sign-in with FB</button>
            //                     </SocialLogin>
            //                 </div>
            //                 <div className="clear"></div>
            //                 <div id="customer" className="desktop-12 mobile-3">
            //                     <SocialLogin provider='google'
            //                         appId={process.env.REACT_APP_GPLUS_APPID}
            //                         callback={this.responseSocialLogin.bind(this)}>
            //                         <button>Sign-in with Google</button>
            //                     </SocialLogin>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <main className="nl-main">
                <div className="nl-main__wrapper">
                    <h1 className='nl-main__title'></h1>
                    <p className='nl-main__content'></p>

                    <form className="nl-form" method="post" action="">
                        <div className="nl-form__option">
                            <label className="nl-form__label" htmlFor="nl-form__checkbox-2">
                                <input name="chk_daily" value="y" type="checkbox" id="nl-form__checkbox-2"
                                    className='nl-form__checkbox' />
                                <span className="nl-form__checkbox-box"></span>
                                <h3 className='nl-form__checkbox-title'>Vogue Daily</h3>
                                <p className='nl-form__checkbox-content'>Your daily Vogue digest - the day's biggest fashion news, beauty tips, shopping and trends inspiration,
                                red-carpet galleries and more</p>
                            </label>
                        </div>
                        <div className="nl-form__option">
                            <label className="nl-form__label" htmlFor="nl-form__checkbox-3">
                                <input name="chk_weekly" value="y" type="checkbox" id="nl-form__checkbox-3" className='nl-form__checkbox' />
                                <span className="nl-form__checkbox-box"></span>
                                <h3 className='nl-form__checkbox-title'>Vogue Weekly</h3>
                                <p className='nl-form__checkbox-content'>Catch up with this week in Vogue with our weekend newsletters</p>
                            </label>
                        </div>

                        <label className='nl-form__email-label' htmlFor="nl-form__email">Enter your e-mail address</label>
                        <input type="email" name="email" className='nl-form__email' id="nl-form__email" placeholder="Enter your e-mail address" required
                            value="" />

                        <input type="submit" name="" className='global__button-reset btn-single btn-single--light nl-form__submit' value='Sign Up' />


                        <label htmlFor='nl-form__checkbox-5' className='nl-form__label'>
                            <input type="checkbox" name="optin_condenast" value="y" id='nl-form__checkbox-5' className='nl-form__checkbox-small' />
                            <span className="nl-form__checkbox-small-box"></span>
                            <p className='nl-form__checkbox-small-content'>I would like to receive news and special offers from Cond&eacute; Nast Publications</p>
                        </label>

                        <label htmlFor='nl-form__checkbox-6' className='nl-form__label'>
                            <input type="checkbox" name="optin_thirdparty" value="y" id='nl-form__checkbox-6' className='nl-form__checkbox-small' />
                            <span className="nl-form__checkbox-small-box"></span>
                            <p className='nl-form__checkbox-small-content'>I would like to receive news and special offers from carefully selected partners of Cond&eacute; Nast</p>
                        </label>
                    </form>

                    <div className='nl-main__separator'></div>
                    <div className='nl-main__footer'>Will be used in accordance with our&nbsp;
                    <a href='http://www.condenast.co.uk/privacy' className='nl-main__privacy'>Privacy Policy</a>
                    </div>
                </div>
            </main>
        );
    }
}

function mapStateToProps(state) {
    console.log('SIGNIN ', state);
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);