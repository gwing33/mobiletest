var React = require('react');
var PropTypes = React.PropTypes;

var EventItem = React.createClass({

  propTypes: {
    evt: PropTypes.object.isRequired
  },

  render: function() {
    var evt = this.props.evt;
    
    return <li>
      {evt.name}
    </li>;
  }
});

module.exports = EventItem;
