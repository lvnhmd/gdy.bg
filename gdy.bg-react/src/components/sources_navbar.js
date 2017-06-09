import React from 'react';
import SourcesNavbarItem from './sources_navbar_item';


const SourcesNavbar = ({sources}) => {
    
    return (
        <div id="navigation" className="row">
            <nav className="primary">
                <ul id="nav" className="desktop-12">
                    {sources}
                </ul>
            </nav>
        </div>
    );
};

export default SourcesNavbar;