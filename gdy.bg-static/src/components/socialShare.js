/* eslint-disable react/prefer-stateless-function */
const React = require('react');
let ShareButtons = require('react-share').ShareButtons;
let ShareCounts = require('react-share').ShareCounts;
let generateShareIcon = require('react-share').generateShareIcon;

const {
    FacebookShareButton,
    TwitterShareButton
} = ShareButtons;

const {
    FacebookShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class SocialShare extends React.Component {

    render() {

        return (
            <div className="jssocials-info Demo__container">

                <div className="Demo__some-network">

                    <FacebookShareButton
                        url={this.props.shareUrl}
                        quote={this.props.title}
                        className="Demo__some-network__share-button">
                        <FacebookIcon
                            size={32}
                            round />
                    </FacebookShareButton>

                    <FacebookShareCount
                        url={this.props.shareUrl}
                        className="Demo__some-network__share-count">
                        {count => count}
                    </FacebookShareCount>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={this.props.shareUrl}
                        title={this.props.title}
                        via='ClubSwagbag'
                        hashtags={this.props.hashtags}
                        className="Demo__some-network__share-button">
                        <TwitterIcon
                            size={32}
                            round />
                    </TwitterShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>
            </div>
            
        );
    }
}

module.exports = SocialShare;

