var React = require('react');
var PropTypes = React.PropTypes;
var AppViewActions = require('../../actions/AppViewActions');
var GlobalStore = require('../../stores/GlobalStore');

var Input = React.createClass({

  propTypes: {
    value: PropTypes.any,
    store: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
  },

  render: function() {
    var props = this.props,
        val = GlobalStore.getAttr(props.store, props.name);
    console.log('render input');
    return <input type='text' value={val} onChange={this._onChange} />
  },

  _onChange: function(e) {
    var props = this.props;

    if(props.store && props.name) {
      var obj = {};
      obj[props.name] = e.target.value;

      AppViewActions.updateGlobalStore(props.store, obj);
    }

    var onChange = props.onChange;
    if(typeof onChange === 'function') {
      onChange(e, props.store, props.name);
    }
  }

});

module.exports = Input;
