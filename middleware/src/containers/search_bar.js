import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event) {
        console.log(event.target.value);
        // mistery context 
        // Uncaught TypeError: Cannot read property 'setState' of undefined
        // could be fixed with arrow function
        // but instead we will bind the context
        // this.onInputChange = this.onInputChange.bind(this); - in constructor
        this.setState({
            term: event.target.value
        }
        );
    }

    onFormSubmit(event) {
        // prevent default submit
        event.preventDefault();

        // we need to go fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear the input
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <form className='input-group'
                onSubmit={this.onFormSubmit} >
                <input
                    placeholder="get a five day forecast in your fav cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}

                />
                <span className='input-group-btn'>
                    <button type="submit" className="btn btn-secondary">submit</button>
                </span>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);