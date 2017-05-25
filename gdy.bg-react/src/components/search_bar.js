import React, { Component }  from 'react';

// const SearchBar = () => {
//     return <input />
// };
// promote SearchBar from a functional component to a class based component 
class SearchBar extends Component {
    constructor(props)  {
        super(props);

        this.state = { term : '' };
    }

    render()    {
        // return <input onChange={this.onInputChange} />;
        return (
            <div>
                <input 
                    value={this.state.term}    // by adding value we turned input into controlled input and the initial value is empty 
                    onChange={event =>  this.setState({term: event.target.value}) } />
                {/*Value of the input: {this.state.term}*/}
           </div>     
        );
    }

    onInputChange(event)    {
        console.log(event.target.value);

       this.setState({term: event.target.value});
    }


}

// new SearchBar

export default SearchBar;