const React = require('react');
const { connect } = require('react-redux');
const bindActionCreators = require('redux').bindActionCreators;
const gotoSignin = require('../actions/index').gotoSignin;
const signout = require('../actions/index').signout;

class Greeting extends React.Component {

    render() {
        if (this.props.isAuthenticated) {
            if (this.props.isMobile) {
                return (
                    <div className="n-menu__social">
                        <h4 className="n-menu__social-title">
                            <span className='n-menu__social-brand'>Hi, {this.props.name}</span>
                        </h4>
                        <a onClick={() => this.props.signout()}
                            className="btn-single btn-single--light n-main__cover__btn">sign out</a>
                    </div>)
            }
            else return (
                <div className="n-main__covers">
                    <div className="n-main__covers__wrapper">

                        <div className="n-main__cover__offer">
                            Hi, {this.props.name}<br />
                            <a onClick={() => this.props.signout()}
                                className="btn-single btn-single--light n-main__cover__btn">sign out</a>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            if (this.props.isMobile) {
                return (
                    <div className="global__a--center">
                        <a onClick={() => this.props.gotoSignin()}
                            className="n-menu__newsletter-btn">Sign In</a>
                    </div>
                );
            }
            else return (
                <div className="n-main__covers">
                    <div className="n-main__covers__wrapper">

                        <div className="n-main__cover__offer">
                            Hi, stranger<br />
                            <a onClick={() => this.props.gotoSignin()}
                                className="btn-single btn-single--light n-main__cover__btn">Sign In</a>
                        </div>
                    </div>
                </div>
            );
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Greeting);
