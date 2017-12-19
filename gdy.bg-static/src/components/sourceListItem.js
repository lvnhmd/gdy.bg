const React = require('react');
const connect = require('react-redux').connect;
const _ = require('lodash');

class SourceListItem extends React.Component {

    render() {
        if (this.props.isMobile) {
            if (this.props.active) {
                return (
                    <a>
                        <li className="n-menu__nav-item">
                            <div className="n-menu__nav-link"> {this.props.value} </div>
                        </li>
                    </a>

                )
            }
            else {
                return (

                    <a>
                        <li className="n-menu__nav-item">
                            <div className="n-menu__nav-link"> {this.props.value} </div>
                        </li>
                    </a>

                )
            }
        } else {
            if (this.props.active) {
                return (
                    <li className="n-main__list-item n-main__nav-link">
                        {/* <a className="n-main__nav-link" > */}
                        <span>{this.props.value}</span>
                        {/* </a> */}
                    </li>

                )
            }
            else {
                return (
                    <li className="n-main__list-item n-main__nav-link">
                        {/* <a className="n-main__nav-link" > */}
                        <span>{this.props.value}</span>
                        {/* </a> */}
                    </li>
                )
            }
        }
    }
}

function mapStateToProps(state, ownProps) {

    var name = ownProps.value.props.children[1];

    return {
        active: _.result(_.find(state.filters, function (f) {
            return f.name === name;
        }), 'active')
    };

}

module.exports = connect(mapStateToProps, null)(SourceListItem);

