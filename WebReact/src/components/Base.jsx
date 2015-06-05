var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Base = React.createClass({
  render: function() {
    return <div>
      <h1>Current Events</h1>
      <RouteHandler />
    </div>;
  }
});

module.exports = Base;
