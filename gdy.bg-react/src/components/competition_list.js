import React from 'react';
import CompetitionListItem from './competition_list_item';


const CompetitionList = (props) => {
    console.log(props.competitions);

    const competitionItems = props.competitions.map((competition) => {
        return <CompetitionListItem key={competition.uri} competition={competition} />
    });

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
                        {competitionItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitionList;