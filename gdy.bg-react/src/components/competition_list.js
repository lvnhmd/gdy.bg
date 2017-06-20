import React, { Component } from 'react';
import CompetitionListItem from './competition_list_item';
import { connect } from 'react-redux';
import { fetchCompetitions } from '../actions/index';

class CompetitionList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCompetitions();
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
                            hello
                        </div>
                    </div>
                </div>
            </div>
        );

    }
};

export default connect((state) => state, { fetchCompetitions })(CompetitionList);

