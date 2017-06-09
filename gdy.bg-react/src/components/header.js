import React, { Component } from 'react';
import SearchField from './search_field';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const filterCompetitions = (term) => { this.props.onSearchTermChange(term)  };

        return (
            <div id="header" className="row">
                <div id="logo" className="desktop-6 tablet-4 mobile-1">
                    <a on-click="goto:home"><img src="img/logo.svg" alt="" style={{ border: 0 }} /></a>
                </div>
                <SearchField onSearchTermChange={filterCompetitions} />
            </div>
        );
    }
}

export default Header;