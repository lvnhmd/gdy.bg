import React from 'react';
import { connect } from 'react-redux';

class SourceListItem extends React.Component {

    render() {
        if (this.props.active) {
            return (<li className='selectedListItem'>{this.props.value}</li>)
        }
        else {
            return (<li>{this.props.value}</li>)
        }

    }
}

function mapStateToProps(state, ownProps) {

    var sourceName = ownProps.value.props.children[1];

    // console.log('VS result : ' , state.filters.filter(function (f) {

    //     console.log(f.name, ' : vs : ', sourceName);

    //     return f.name === sourceName
    // }
    // ));

    if ((state.filters.filter(f => (f.name === sourceName))).length > 0) {
        return { active: true };
    }

    else
        return { active: false };
}
export default connect(mapStateToProps, null)(SourceListItem);