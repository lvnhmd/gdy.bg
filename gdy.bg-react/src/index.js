import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompetitionList from './components/competition_list';
// import SourcesNavbarItem from './components/sources_navbar_item';
// import SourcesNavbar from './components/sources_navbar';
import Header from './components/header';
import SourcesNavbar from './containers/sources_navbar';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            competitions: [],
            allCompetitions: [],
            sources: []
        };

        this.getCompetitions();
        // this.getSources();
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

    // getSources() {

    //     fetch('https://dev.gdy.bg/api/v1/sources')
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             // console.log(data.Items);
    //             this.setState({
    //                 sources: data.Items
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(JSON.stringify(error));
    //         });

    // }

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

        // const sourceItems = this.state.sources.map((source) => {
        //     return <SourcesNavbarItem key={source.name} source={source} />
        // });

        return (
            <div>
                <Header onSearchTermChange={filterCompetitions} />
                {/*<SourcesNavbar sources={sourceItems} />*/}
                <SourcesNavbar /> 
                <CompetitionList competitions={this.state.competitions} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
