import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectBook } from '../actions/index';
// import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render() {
        
        // I need this check because intially I am setting the state to null in reducer_active_book.js
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }
        
        return (
            <div>
                <h3>Details for:</h3> 
                <div>{this.props.book.title}, Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };

}


// //anything returned from this fumction, will end up as props on the BookList container
// function mapDispatchToProps(dispatch) {
//     //when selectBook is called, the result should be passed to all reducers
//     return bindActionCreators({selectBook : selectBook}, dispatch);
// } 

// promote BookList from a component to a container
export default connect(mapStateToProps)(BookDetail);