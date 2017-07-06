import React from 'react';
import SocialShare from '../components/social_share';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { competitionClicked } from '../actions/index';

class CompetitionListItem extends React.Component {

    click() {
        this.props.competitionClicked(this.props.value);
    }

    render() {
        let competition = this.props.value;
        return (
            <div className="product-index desktop-4 tablet-2 mobile-3">
                <div className="product-index-inner">
                    <div className="badge">{competition.daystoenter}</div>
                    <a onClick={this.click.bind(this)}><div className="img-responsive img-thumbnail ratio-4-3" style={{ backgroundImage: "url('" + competition.img + "')" }} /></a>
                    <div className="product-info">{competition.title}</div>
                    {competition.title.toLowerCase().length < 52 ? <div className="blankrow">&nbsp;</div> : ''}
                    <SocialShare shareUrl="https://swagbag.club" title={competition.title} img={competition.img} hashtags={competition.hashtags} />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ competitionClicked }, dispatch);
}

export default connect(null, mapDispatchToProps)(CompetitionListItem);