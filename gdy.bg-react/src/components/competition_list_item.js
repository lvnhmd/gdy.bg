import React from 'react';
import SocialShare from '../components/social_share';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { trackEntry } from '../actions/index';

class CompetitionListItem extends React.Component {

    click() {
        this.props.trackEntry({
            userId: this.props.userId,
            uri: this.props.value.uri
        }, this.props.isAuthenticated);
    }

    render() {
        let comp = this.props.value;
        return (
            <div className="product-index desktop-4 tablet-2 mobile-3">
                <div className="product-index-inner">
                    <div className="badge">{comp.daysToEnter}</div>
                    <a onClick={this.click.bind(this)}><div className="img-responsive img-thumbnail ratio-4-3" style={{ backgroundImage: "url('" + comp.img + "')" }} /></a>
                    <div className="product-info">{comp.title}</div>
                    {comp.title.toLowerCase().length < 52 ? <div className="blankrow">&nbsp;</div> : ''}
                    <SocialShare shareUrl="https://swagbag.club" title={comp.title} img={comp.img} hashtags={comp.hashtags} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user.id,
        isAuthenticated: state.user.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ trackEntry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionListItem);