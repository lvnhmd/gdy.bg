import React, { Component } from 'react';
import SearchField from '../containers/search_field';

export default class Header extends Component {
    render() {
        return (
            <div id="header" className="row">
                <div id="logo" className="desktop-6 tablet-4 mobile-1">
                    <a><img src="img/logo.svg" alt="" style={{ border: 0 }} /></a>
                </div>
                <SearchField />
            </div>
        );
    }
}