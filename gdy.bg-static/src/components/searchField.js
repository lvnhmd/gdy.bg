const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { searchTermChanged } = require('../actions/index');

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        if (this.props.isMobile) {
            return (
                // <!-- search box mobile begin -->
                <div className="n-menu__search">
                    <div className="n-main__nav-search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M18.5 19.9l-5.6-5.7c-1.3 1-3 1.7-4.9 1.7-4.4 0-8-3.5-8-7.9s3.6-8 8-8 7.9 3.6 7.9 7.9c0 1.8-.6 3.5-1.7 4.9l5.6 5.7-1.3 1.4zM8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                            />
                        </svg>
                    </div>
                    <div className="n-menu__search-textbox">
                        <input type="search" className="srch-textbox" placeholder="Search"
                            value={this.state.term}
                            onChange={event => this.onInputChange(event.target.value)} />
                    </div>
                </div>
                // <!-- search box mobile end -->
            );
        }
        else {
            return (
                // <!-- search box desktop begin -->
                <div className="n-search">
                    <div className="srch-main">
                        <input type="search" className="srch-textbox" placeholder="Search"
                            value={this.state.term}
                            onChange={event => this.onInputChange(event.target.value)} />
                    </div>
                </div>
                // <!-- search box desktop end -->
            );
        }
    }

    onInputChange(term) {
        console.log('term changed : ', term);
        this.setState({ term });
        this.props.searchTermChanged(term);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchTermChanged }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(SearchField);
