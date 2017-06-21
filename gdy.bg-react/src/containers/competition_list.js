import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompetitions } from '../actions/index';

class CompetitionList extends Component {

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

// export default connect((state) => state, { fetchCompetitions })(CompetitionList);
function mapStateToProps({ competitions }) {
    console.log('competitions ', competitions);
    return { competitions };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCompetitions }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionList);

