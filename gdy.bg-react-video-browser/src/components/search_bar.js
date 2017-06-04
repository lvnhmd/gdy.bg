import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };
// promote SearchBar from a functional component to a class based component 
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        // return <input onChange={this.onInputChange} />;
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}    // by adding value we turned input into controlled input and the initial value is empty 
                    onChange={event => this.onInputChange(event.target.value)} />
                {/*Value of the input: {this.state.term}*/}
            </div>
        );
    }

    onInputChange(term) {
        console.log(event.target.value);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }


}

// new SearchBar

export default SearchBar;