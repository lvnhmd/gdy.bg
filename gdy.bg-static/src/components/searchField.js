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
        return (
            // <div id="search" className="desktop-3 tablet-1 mobile-6">
            //     <i className="fa fa-search"></i>
            //     <input type="text" id="q" name="q"
            //         className="search-field"
            //         placeholder="Search" value={this.state.term}
            //         onChange={event => this.onInputChange(event.target.value)} />
            // </div>

            <div className="n-main__nav-search">
                <label htmlFor="chkNavSearch" className="n-main__nav-search__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M18.5 19.9l-5.6-5.7c-1.3 1-3 1.7-4.9 1.7-4.4 0-8-3.5-8-7.9s3.6-8 8-8 7.9 3.6 7.9 7.9c0 1.8-.6 3.5-1.7 4.9l5.6 5.7-1.3 1.4zM8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                        />
                    </svg>
                </label>
                <label htmlFor="chkNavSearch" className="global__hidden n-main__nav-search__close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.02 17.98">
                        <title>close</title>
                        <path d="M18.02 1.42L16.61 0l-7.6 7.58L1.41 0 0 1.42l7.59 7.57L0 16.56l1.41 1.42 7.6-7.58 7.6 7.58 1.41-1.42-7.59-7.57 7.59-7.57z"
                        />
                    </svg>
                </label>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.searchTermChanged(term);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchTermChanged }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(SearchField);
