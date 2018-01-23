const React = require('react');
// var moment = require('moment');

class Badge extends React.Component {
    render() {

        // var now = moment(new Date());
        // var duration = moment.duration(now.diff(this.props.createdAt));
        // var hours = duration.asHours();

        // if (hours > 24) return null;
        if (this.props.isNew) {
            return (
                <span className="notify-badge">new</span>)
        }
        return null;
    }
}

module.exports = Badge;
