import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompetitions, toggleSource, searchTermChanged } from '../actions/index';
import _ from 'lodash';
import CompetitionListItem from '../components/competition_list_item';

class CompetitionList extends Component {

    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderList() {
        return this.props.competitions.map((competition) => {
            return (
                <CompetitionListItem key={competition.uri} value={competition} />
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div id="content" className="row">
                    <div id="collectionpage">
                        <div className="collection-description">
                            <div className="rte"></div>
                        </div>
                        <div className="clear"></div>
                        <div id="product-loop" className="desktop-12 mobile-3">
                            {this.renderList()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const applyFilters = (competitions, filters, term) => {

    var comps = competitions;

    if (filters.length) {

        var activeFilters = _.filter(filters, function (f) {
            if (f.active) {
                return f;
            }
        });

        if (activeFilters.length) {

            var af = _.map(_.map(activeFilters, 'name'), _.method('toLowerCase'));

            comps = _.filter(competitions, function (c) {
                if (_.indexOf(af, c.source) > -1)
                    return c;
            });
        }
    }

    term = term.toLowerCase().trim();
    if (term.length) {
        comps = _.filter(comps, function (c) {
            return c.title.toLowerCase().match(term);
        });
    }

    return comps;
}

function mapStateToProps(state) {

    var comps =
        _.orderBy(applyFilters(state.competitions, state.filters, state.searchTerm),
            ['daysToEnter', 'createdAt'],
            ['asc', 'desc']);

    return {
        competitions: comps
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCompetitions, toggleSource, searchTermChanged }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList);