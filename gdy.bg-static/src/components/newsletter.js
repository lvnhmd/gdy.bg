import React, { Component } from 'react';
import { displayPolicy } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newsletterSignup } from '../actions/index';

class Newsletter extends Component {

    constructor(props) {
        console.log('Newsletter props:', props);
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayPolicy() {
        this.props.displayPolicy();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.newsletterSignup({
            email: this.state.value
        });
    }

    render() {
        if (this.props.isNewsletterSignup) {
            return (
                <main className="nl-main">
                    <div className="nl-main__wrapper">
                        <h1 className="nl-main__title">Hooray! 
You're signed up :)</h1>
                        <p className="nl-main__content">Keep an eye on your inbox</p>
                    </div>
                </main>
            );
        }
        else {
            return (<main className="nl-main">
                <div className="nl-main__wrapper">
                    <h1 className='nl-main__title'>Don't miss a beat</h1>
                    <p className='nl-main__content'>Subscribe to our newsletter</p>

                    <form className="nl-form" onSubmit={this.handleSubmit}>

                        <label className='nl-form__email-label' htmlFor="nl-form__email">Enter your e-mail address</label>
                        <input type="email" name="email"
                            className='nl-form__email'
                            placeholder="Enter your e-mail address"
                            required
                            value={this.state.value} onChange={this.handleChange}
                        />
                        <input type="submit"
                            className='global__button-reset btn-single btn-single--light nl-form__submit'
                            value='Sign Up' />

                    </form>

                    <div className='nl-main__separator'></div>
                    <div className='nl-main__footer'>Read our
                        <a onClick={this.displayPolicy.bind(this)} className='nl-main__privacy'> Privacy Policy</a>
                    </div>
                </div>
            </main>
            );
        }
    }
}

function mapStateToProps(state) {

    console.log('newsletter signup state ', state);

    return {
        isNewsletterSignup: state.isNewsletterSignup
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ displayPolicy, newsletterSignup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);