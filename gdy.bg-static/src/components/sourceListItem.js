const React = require('react');
const connect = require('react-redux').connect;
const _ = require('lodash');

class SourceListItem extends React.Component {

    render() {
        if (this.props.isMobile) {
            if (this.props.active) {
                return (
                    <li className="n-menu__nav-item">
                        <div className="n-menu__nav-link active"> {this.props.value} </div>
                    </li>
                )
            }
            else {
                return (
                    <li className="n-menu__nav-item">
                        <div className="n-menu__nav-link"> {this.props.value} </div>
                    </li>
                )
            }
        } else {
            if (this.props.active) {
                return (
                    <li className="n-main__list-item n-main__nav-link">
                        <span className="active">{this.props.value}</span>
                    </li>
                )
            }
            else {
                return (
                    <li className="n-main__list-item n-main__nav-link">
                        <span>{this.props.value}</span>
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

