import React from 'react';
import { Component } from 'react';

import Header from './header';
import SourceList from '../containers/source_list';
import CompetitionList from '../containers/competition_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SourceList />
                <CompetitionList />
            </div>
        );
    }
}
