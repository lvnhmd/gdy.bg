// import _ from 'lodash';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './header';
import SourcesNavbar from '../containers/sources_navbar';
import CompetitionList from '../containers/competition_list';

export default class App extends Component {

    // filterCompetitions(term) {

    //     //    var filters = this.get('filters');

    //     //     if (filters.length) {
    //     //         competitions = _.filter(competitions, function (comp) {
    //     //             if (_.indexOf(filters, comp.source) > -1)
    //     //                 return comp;
    //     //         });
    //     //     }

    //     var filtered = _.filter(this.state.allCompetitions, function (c) {
    //         return c.title.toLowerCase().match(term.toLowerCase());
    //     });

    //     this.setState({
    //         competitions: filtered
    //     });


    // }

    render() {

        // const filterCompetitions = (term) => { this.filterCompetitions(term) };

        return (
            <div>
                {/*<Header onSearchTermChange={filterCompetitions} />*/}
                <Header />
                <SourcesNavbar />
                <CompetitionList />
            </div>
        );
    };
}