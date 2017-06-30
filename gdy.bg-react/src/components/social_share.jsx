/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
} from 'react-share';

import exampleImage from './react-share-pin-example.png';

const {
  FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton
} = ShareButtons;

const {
  FacebookShareCount,
    PinterestShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');
const WhatsappIcon = generateShareIcon('whatsapp');

class SocialShare extends Component {
    render() {
        const shareUrl = 'http://github.com';
        const title = 'GitHub';

        return (
            <div className="jssocials-info Demo__container">

                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={shareUrl}
                        title={title}
                        picture={`${String(window.location)}/${exampleImage}`}
                        className="Demo__some-network__share-button">
                        <FacebookIcon
                            size={32}
                            round />
                    </FacebookShareButton>

                    <FacebookShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count">
                        {count => count}
                    </FacebookShareCount>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
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
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className="Demo__some-network__share-button">
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>


                <div className="Demo__some-network">
                    <PinterestShareButton
                        url={String(window.location)}
                        media={`${String(window.location)}/${exampleImage}`}
                        windowWidth={1000}
                        windowHeight={730}
                        className="Demo__some-network__share-button">
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>

                    <PinterestShareCount url={shareUrl}
                        className="Demo__some-network__share-count" />
                </div>


            </div>
        );
    }
}

export default SocialShare;
