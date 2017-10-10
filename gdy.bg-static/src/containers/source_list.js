import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSources, toggleSource } from '../actions/index';
import SourceListItem from '../components/source_list_item';

class SourceList extends Component {

    componentDidMount() {
        this.props.fetchSources();
    }

    renderList() {
        return this.props.sources.map((source) => {
            return (
                <SourceListItem key={source.name} value={
                    <a onClick={() => this.props.toggleSource(source)}> {source.name}</a>} />
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
    return { sources: state.sources };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSources, toggleSource }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceList);

