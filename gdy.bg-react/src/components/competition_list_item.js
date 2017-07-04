import React from 'react';
import SocialShare from '../components/social_share';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

class CompetitionListItem extends React.Component {

    constructor(props) {
        super(props);
        this.isAuthorised = false;
    }

    click() {
        console.log('clicked ', this.props.value.uri);
        this.props.login();
        if(this.isAuthorised) {
             console.log('THIS ', this);
        }
    }

    render() {
        let competition = this.props.value;
        return (
            <div className="product-index desktop-4 tablet-2 mobile-3">
                <div className="product-index-inner">
                    <div className="badge">{competition.daystoenter}</div>
                    <a onClick={this.click.bind(this)} href={competition.uri} target="_blank"><div className="img-responsive img-thumbnail ratio-4-3" style={{ backgroundImage: "url('" + competition.img + "')" }} /></a>
                    <div className="product-info">{competition.title}</div>
                    {competition.title.toLowerCase().length < 52 ? <div className="blankrow">&nbsp;</div> : ''}
                    <SocialShare shareUrl="https://swagbag.club" title={competition.title} img={competition.img} hashtags={competition.hashtags} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('CLI ', state);
    return {
        isAuthorised: state.user != null ? true : false
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionListItem);