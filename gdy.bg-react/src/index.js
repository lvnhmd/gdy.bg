import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCXiknbMFJHJPd2sXjgflnFRK99pNG1Mu0';



// Create a new component. This component should produce some HTML

/*const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ); //JSX
}*/

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'cem yilmaz' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (<div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>);
    }
}

// Take this component's generated HTML and put it on the page (in the DOM) - render App component

// http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&code=const%20App%20%3D%20function()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHi!%3C%2Fdiv%3E%3B%20%2F%2FJSX%0A%7D%0A

// passing a class will throw an error
// ReactDOM.render(App);

// passing an instance of the App class
// ReactDOM.render(<App />); // will throw Target container is not a DOM element - where to put this component on the page , what is the target container ? 
ReactDOM.render(<App />, document.querySelector('.container'));
