import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import SearchField from './components/search_field';
import CompetitionList from './components/competition_list';
import Header from './components/header';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            competitions: [],
            allCompetitions: []
        };

        this.getCompetitions();

    }

    getCompetitions() {

        const url = 'https://dev.gdy.bg/api/v1/competitions';
        fetch(url)
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
                <CompetitionList competitions={this.state.competitions} />

            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
