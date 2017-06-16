import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompetitionList from './competition_list';
import Header from './header';
import SourcesNavbar from '../containers/sources_navbar';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            competitions: [],
            allCompetitions: []
        };

        this.getCompetitions();
    }

    getCompetitions() {

        fetch('https://dev.gdy.bg/api/v1/competitions')
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data.Items);
                this.setState({
                    competitions: data.Items,
                    allCompetitions: data.Items
                });

            })
            .catch((error) => {
                console.log(JSON.stringify(error));
            });
    }

    filterCompetitions(term) {

        //    var filters = this.get('filters');

        //     if (filters.length) {
        //         competitions = _.filter(competitions, function (comp) {
        //             if (_.indexOf(filters, comp.source) > -1)
        //                 return comp;
        //         });
        //     }

        var filtered = _.filter(this.state.allCompetitions, function (c) {
            return c.title.toLowerCase().match(term.toLowerCase());
        });

        this.setState({
            competitions: filtered
        });


    }

    render() {

        const filterCompetitions = (term) => { this.filterCompetitions(term) };

        return (
            <div>
                <Header onSearchTermChange={filterCompetitions} />
                <SourcesNavbar /> 
                <CompetitionList competitions={this.state.competitions} />
            </div>
        );
    };
}