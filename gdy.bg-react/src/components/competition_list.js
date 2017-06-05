import React from 'react';
import CompetitionListItem from './competition_list_item';


const CompetitionList = (competitions) => {
    console.log(competitions);
    return (
        <div id="collectionpage">
            <div className="collection-description">
                <h1></h1>
                <div className="rte"></div>
            </div>
            <div className="clear"></div>
            <div id="product-loop" className="desktop-12 mobile-3">
                <div className="product-index desktop-4 tablet-2 mobile-3">
                    {competitions}
                </div>
            </div>
        </div>
    );
};

export default CompetitionList;