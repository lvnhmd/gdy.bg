const React = require('react');
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const fetchSources = require('../actions/index').fetchSources;
const toggleSource = require('../actions/index').toggleSource;
const SourceListItem = require('./sourceListItem');

const Radium = require('radium');

class SourceList extends React.Component {

    componentDidMount() {
        this.props.fetchSources();
    }

    renderList() {
        return this.props.sources.map((source) => {
            return (
                <SourceListItem key={source.name}
                    value={<a onClick={() => this.props.toggleSource(source)}> {source.name}</a>}
                    isMobile={this.props.isMobile} />
            );
        });
    }

    render() {
        if (this.props.isMobile) {
            return (
                <ul className='n-menu__nav__wrapper global__list-reset'>
                    {this.renderList()}
                </ul>

            )
        }
        else {
            return (
                <ul className="global__list-reset n-main__list n-visibility--desktop">
                    {this.renderList()}
                </ul>

            )
        }
    }
};

function mapStateToProps(state) {
    return { sources: state.sources };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSources, toggleSource }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Radium(SourceList));

