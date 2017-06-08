import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompetitionList from './components/competition_list';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            competitions: [{
                closes: "2017-05-28T00:00:00.000Z",
                img: "http://6.darkroom.shortlist.com/710/1dc5aac31a2a5ae0908f7231be1a4e1f:46a3c8ce45cdfc38979a283dc050b93c/prettygreen-festival0134-web-1.jpg",
                uri: "http://www.shortlist.com/win/win-500-to-spend-at-pretty-green",
                source: "shortlist",
                updatedAt: "2017-06-04T17:10:28.912Z",
                title: "Win ВЈ500 worth of festival clothing from Pretty Green"
            }]
        };

        const url = 'https://dev.gdy.bg/api/v1/competitions';
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data.Items);
                this.setState({
                    competitions: data.Items
                });
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
            });

        // this.getCompetitions();

    }

    getCompetitions() {
        // YTSearch({ key: API_KEY, term: term }, (videos) => {
        //     this.setState({
        //         videos: videos,
        //         selectedVideo: videos[0]
        //     });
        // });

        const url = 'https://dev.gdy.bg/api/v1/competitions';
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                // console.log(data.Items);
                this.setState({
                    competitions: data.Items
                });
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    }

    render() {

        return (<div>
            <CompetitionList competitions={this.state.competitions} />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
