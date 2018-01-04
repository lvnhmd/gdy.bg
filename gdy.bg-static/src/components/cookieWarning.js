const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { displayPolicy } = require('../actions/index');

class CookieWarning extends React.Component {
    click() {
        this.props.displayPolicy();
    }

    render() {
        return (
            <div className="c-cookie-warning is-hidden" id="domCookieWarning">
                <div className="c-cookie-warning__table">
                    <div className="c-cookie-warning__table-cell c-cookie-warning__table-cell--message">
                        <p className="c-cookie-warning__message">
                            Welcome to Swagbag.Club. This site uses cookies. To find out more, read our <a onClick={this.click.bind(this)}>privacy policy</a>.
</p>
                    </div>
                    <div className="c-cookie-warning__table-cell c-cookie-warning__table-cell--cta">
                        <button className="global__button-reset c-cookie-warning__button js-c-cookie-close-btn">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.02 17.98"><title>close</title><path d="M18.02 1.42L16.61 0l-7.6 7.58L1.41 0 0 1.42l7.59 7.57L0 16.56l1.41 1.42 7.6-7.58 7.6 7.58 1.41-1.42-7.59-7.57 7.59-7.57z" /></svg></button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ displayPolicy }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(CookieWarning);
