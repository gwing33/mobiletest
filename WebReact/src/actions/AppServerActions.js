var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants');
var StoreConstants = AppConstants.StoreConstants;

var AppServerActions = {

  setGlobalStore: function(err, store, attrs) {
    AppDispatcher.handleServerAction({
      type: StoreConstants.STORE_SET,
      store: store,
      attrs: attrs
    });
  },

  updateGlobalStore: function(err, store, attrs) {
    AppDispatcher.handleServerAction({
      type: StoreConstants.STORE_UPDATE,
      store: store,
      attrs: attrs
    });
  },

  deleteGlobalStore: function(err, store) {
    AppDispatcher.handleServerAction({
      type: StoreConstants.STORE_DELETE,
      store: store
    });
  }

};

module.exports = AppServerActions;
