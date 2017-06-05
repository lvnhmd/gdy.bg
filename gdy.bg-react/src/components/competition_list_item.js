import React from 'react';

const CompetitionListItem = ({ competition }) => {
    
    return (
        <div className="product-index desktop-4 tablet-2 mobile-3">
            <div className="product-index-inner">
                <div className="badge">{competition.daystoenter}</div>
                <div className="img-responsive img-thumbnail ratio-4-3" style="background-image:url('{competition.img}')"></div>
                <div className="product-info">{competition.title}</div>
            </div>
        </div>

    );
};

export default CompetitionListItem;