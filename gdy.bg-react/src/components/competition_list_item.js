import React from 'react';

const CompetitionListItem = ({competition}) => {
    // style="background-image:url('{competition.img}')"

    const bckgrndImgUrl = competition.img;

    return (
        <div className="product-index desktop-4 tablet-2 mobile-3">
            <div className="product-index-inner">
                <div className="badge">{competition.daystoenter}</div>
                <div className="img-responsive img-thumbnail ratio-4-3" style={{backgroundImage: "url (" + bckgrndImgUrl + ")" }} ></div>
                <div className="product-info">{competition.title}</div>
            </div>
        </div>

    );
};

export default CompetitionListItem;