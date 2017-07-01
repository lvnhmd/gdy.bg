import React from 'react';
import classnames from 'classnames';

export default class SourceListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click() {
        this.setState({ active: !this.state.active });
    }

    render() {
        let classes = classnames({ 'selectedListItem': this.state.active });
        return (<li className={classes} onClick={this.click.bind(this)}>{this.props.value}</li>);
    }
}