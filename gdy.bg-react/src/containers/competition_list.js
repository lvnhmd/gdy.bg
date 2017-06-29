import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompetitions, sourceSelected, searchTermChanged } from '../actions/index';
import _ from 'lodash';
import SocialShare from '../components/social_share'

class CompetitionList extends Component {

    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderCompetition(competition) {
        return (
            <div className="product-index desktop-4 tablet-2 mobile-3" key={competition.uri}>
                <div className="product-index-inner">
                    <div className="badge">{competition.daystoenter}</div>
                    <a><div className="img-responsive img-thumbnail ratio-4-3" style={{ backgroundImage: "url('" + competition.img + "')" }} ></div></a>
                    <div className="product-info">{competition.title}</div>
                    <SocialShare />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div id="content" className="row">
                    <div id="collectionpage">
                        <div className="collection-description">
                            <h1></h1>
                            <div className="rte"></div>
                        </div>
                        <div className="clear"></div>
                        <div id="product-loop" className="desktop-12 mobile-3">
                            {this.props.competitions.map(this.renderCompetition)}
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
        comps = _.filter(competitions, function (c) {
            if (_.indexOf(_.map(filters, 'name'), c.source) > -1)
                return c;
        });
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
    return {
        competitions: applyFilters(state.competitions, state.filters, state.searchTerm)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCompetitions, sourceSelected, searchTermChanged }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList);

