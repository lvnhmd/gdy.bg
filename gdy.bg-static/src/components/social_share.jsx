/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
    PinterestShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const PinterestIcon = generateShareIcon('pinterest');
const WhatsappIcon = generateShareIcon('whatsapp');

class SocialShare extends Component {

    

    render() {
        // console.log('SocialShare props ', this.props);
        return (
            <div className="jssocials-info Demo__container">

                <div className="Demo__some-network">
                    
                    {/*<FacebookShareButton
            url={shareUrl}
            title={title}
            picture={`${String(window.location)}/${exampleImage}`}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>*/}
                    
                    <FacebookShareButton
                        url={this.props.shareUrl}
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

                <div className="Demo__some-network">
                    <GooglePlusShareButton
                        url={this.props.shareUrl}
                        className="Demo__some-network__share-button">
                        <GooglePlusIcon
                            size={32}
                            round />
                    </GooglePlusShareButton>

                    <GooglePlusShareCount
                        url={this.props.shareUrl}
                        className="Demo__some-network__share-count">
                        {count => count}
                    </GooglePlusShareCount>
                </div>

                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={this.props.shareUrl}
                        title={this.props.title}
                        separator=" "
                        className="Demo__some-network__share-button">
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>


                <div className="Demo__some-network">
                    <PinterestShareButton
                        url={this.props.shareUrl}
                        media={this.props.img}
                        description={this.props.title}
                        windowWidth={1000}
                        windowHeight={730}
                        className="Demo__some-network__share-button">
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>

                    <PinterestShareCount url={this.props.shareUrl}
                        className="Demo__some-network__share-count" />
                </div>


            </div>
        );
    }
}

export default SocialShare;
