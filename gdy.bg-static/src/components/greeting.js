const React = require('react');
const { connect }  = require('react-redux');
const bindActionCreators = require('redux').bindActionCreators;
const gotoSignin = require('../actions/index').gotoSignin;
const signout  = require('../actions/index').signout;

class Greeting extends React.Component {

    render() {
        if (this.props.isAuthenticated) {
            return (

                // <div className="n-main__covers">
                //     <div className="n-main__covers__wrapper">

                //         <div className="n-main__cover__offer">
                //             Hi, {this.props.name} <a onClick={() => this.props.signout()}> sign out</a>
                //         </div>
                //     </div>
                // </div>
                
                <div class="n-main__covers">
                    <div class="n-main__covers__wrapper">
                        <div class="n-main__cover__offer">Hi, {this.props.name}
                            <a onClick={() => this.props.signout()} 
                            class="btn-single btn-single--light n-main__cover__btn">sign out</a>
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
                            Hi, stranger<br/>
                            <a onClick={() => this.props.gotoSignin()} 
                               className="btn-single btn-single--light n-main__cover__btn">sign in</a>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

module.exports = connect(mapStateToProps, mapDispatchToProps)(Greeting);
