import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSources, selectSource } from '../actions/index';
import ListItem from '../components/list_item'

class SourcesNavbar extends Component {

    componentDidMount() {
        this.props.fetchSources();
    }

    renderList() {
        return this.props.sources.map((source) => {
            return (
                <ListItem key={source.name} value={
                    <a onClick={() => this.props.selectSource(source)}> {source.name}</a>} />
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
    return { sources: state.sources.sources };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSources, selectSource }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SourcesNavbar);

