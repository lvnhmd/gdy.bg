const React = require('react');
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const fetchCompetitions = require('../actions/index').fetchCompetitions;
const toggleSource = require('../actions/index').toggleSource;
const searchTermChanged = require('../actions/index').searchTermChanged;
const _ = require('lodash');
const CompetitionListItem = require('./competitionListItem');
const Radium = require('radium');

class CompetitionList extends React.Component {

    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderList() {

        console.log('render list ', this.props.competitions);

        return this.props.competitions.map((competition) => {
            return (
                <CompetitionListItem key={competition.uri} value={competition} />
            );
        });
    }

    render() {
        return (

            <section className="c-card-section c-card-section--c-curated">
                <div className="c-card-section__constrain">
                    <ul className="global__list-reset c-card-list js-c-card-list c-card-list--c-curated">
                        {this.renderList()}
                    </ul>
                </div>
            </section>

        );
    }
};

const applyFilters = (competitions, filters, term) => {

    var comps = competitions;

    if (filters.length) {

        var activeFilters = _.filter(filters, function (f) {
            if (f.active) {
                return f;
            }
        });

        if (activeFilters.length) {

            var af = _.map(_.map(activeFilters, 'name'), _.method('toLowerCase'));

            comps = _.filter(competitions, function (c) {
                if (_.indexOf(af, c.source) > -1)
                    return c;
            });
        }
    }

    term = term.toLowerCase().trim();
    if (term.length) {
        comps = _.filter(comps, function (c) {
            return c.title.toLowerCase().match(term);
        });
    }

    return comps;
}

function mapStateToProps(state) {
    console.log('state ', state);
    // var comps =
    //     _.orderBy(applyFilters(state.competitions, state.filters, state.searchTerm),
    //         ['daysToEnter', 'createdAt'],
    //         ['asc', 'desc']);

    // return {
    //     competitions: comps
    // };
    return {
        competitions: state.competitions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCompetitions, toggleSource, searchTermChanged }, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(Radium(CompetitionList));


module.exports = connect(mapStateToProps, mapDispatchToProps)(CompetitionList);
