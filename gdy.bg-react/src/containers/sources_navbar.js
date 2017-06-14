import React, { Component } from 'react';
import { connect } from 'react-redux';

class SourcesNavbar extends Component {

    renderList() {
        return this.props.sources.map((source) => {
            return (
                <li>
                    <a on-click="addToFilters">{source.name}</a>
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

export default connect(mapStateToProps)(SourcesNavbar);