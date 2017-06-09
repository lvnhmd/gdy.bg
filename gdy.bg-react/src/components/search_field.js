import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {

        return (
            <div id="search" className="desktop-3 tablet-1 mobile-6">
                <i className="fa fa-search"></i>
                <input type="text" id="q" name="q" className="search-field" placeholder="Search" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        console.log(event.target.value);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchField;