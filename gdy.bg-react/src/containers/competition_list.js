import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompetitions } from '../actions/index';

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

function mapStateToProps(state) {
    return { competitions: state.competitions.competitions };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCompetitions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList);

