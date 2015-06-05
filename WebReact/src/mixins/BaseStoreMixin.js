var GlobalStore = require('../stores/GlobalStore');


function BaseStoreMixin(store) {
  return {
    // _getStateFromStore: function() {
    //   return {
    //     form: GlobalStore.get(store)
    //   };
    // },

    // getInitialState: function() {
    //   return this._getStateFromStore();
    // },

    componentDidMount: function() {
      GlobalStore.addChangeListener(store, this._onChange);
    },

    componentDidUnmount: function() {
      GlobalStore.removeChangeListener(store, this._onChange);
    },

    _onChange: function() {
      
    }
  };
}

module.exports = BaseStoreMixin;
