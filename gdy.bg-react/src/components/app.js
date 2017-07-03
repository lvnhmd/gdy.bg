import React, { Component } from 'react';
import Header from './header';
import SourceList from '../containers/source_list';
import CompetitionList from '../containers/competition_list';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/login';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SourceList />
                {/*<CompetitionList />*/}
                <Login />
            </div>
        );
    };
}