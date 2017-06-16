import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSource } from '../actions/index';
import { bindActionCreators } from 'redux';

class SourcesNavbar extends Component {

    renderList() {
        return this.props.sources.map((source) => {
            return (
                <li key={source.name} >
                    <a onClick={() => this.props.selectSource(source)}>
                        {source.name}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (

            <div id="navigation" className="row">
                <nav className="primary">
                    <ul id="nav" className="desktop-12">
                        {this.renderList()}
                    </ul>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sources: state.sources
    };

}

//anything returned from this function, will end up as props on the SourcesNavbar container
function mapDispatchToProps(dispatch) {
    //when selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectSource: selectSource }, dispatch);
}

// promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(SourcesNavbar);

