import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class SourceListItem extends React.Component {

    render() {
        if (this.props.active) {
            return (
                // <li className='selectedListItem'>{this.props.value}</li>
                <li className="n-main__list-item">
                    <a className="n-main__nav-link" href="#">
                        <span>{this.props.value}</span>
                    </a>
                </li>
            )
        }
        else {
            return (
                // <li>{this.props.value}</li>
                <li className="n-main__list-item">
                    <a className="n-main__nav-link" href="#">
                        <span>{this.props.value}</span>
                    </a>
                </li>
            )
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

export default connect(mapStateToProps, null)(SourceListItem);