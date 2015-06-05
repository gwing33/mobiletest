var _ = require('lodash');
var React = require('react');

var StoreConstants = require('../constants/AppConstants').StoreConstants;
var GlobalStore = require('../stores/GlobalStore');
var CtApi = require('../apis/CtApi');

var EventItem = require('../components/Events/EventItem.jsx');

var _STORE = StoreConstants.EVENTS_STORE;

function getStateFromStore() {
  return {
    events: GlobalStore.get(_STORE)
  };
}

var EventsPage = React.createClass({

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    GlobalStore.addChangeListener(_STORE, this._onChange );

    // Lets fetch the Events Data
    CtApi.getAllEvents();
  },

  componentWillUnmount: function() {
    GlobalStore.removeChangeListener(_STORE, this._onChange );
  },

  render: function() {
    var events = this.state.events;

    if(_.size(events) === 0) {
      return <div>Loading...</div>;
    }

    return <ul>
      {_.map(events.events, function(evt) {
        return <EventItem evt={evt} />;
      })}
    </ul>;
  },

  _onChange: function() {
    this.setState( getStateFromStore() );
  }

});

module.exports = EventsPage;
