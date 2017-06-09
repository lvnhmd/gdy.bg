import React from 'react';

const SourcesNavbarItem = ({ source }) => {

    return (
        <li>
            <a on-click="addToFilters">{source.name}</a>
        </li>
    );
};

export default SourcesNavbarItem;