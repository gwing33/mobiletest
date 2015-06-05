var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatchers/AppDispatcher');
var StoreConstants = require('../constants/AppConstants').StoreConstants;

var _data = {};

var GlobalStore = _.assign({}, EventEmitter.prototype, {


  // CRUD

  /*
   * @param {string} store
   *
   * @return {object}
   */
  get: function(store) {
    return _data[store] || {};
  },

  getAttr: function(store, name) {
    return this.get(store)[name];
  },

  /* Set will directly assign the attrs passed in.
   *
   * @param {string} store
   * @param {object} attrs
   */
  set: function(store, attrs) {
    _data[store] = attrs;
    this.emitChange(store);
  },

  /* Update will merge the attrs into the existing store data.
   *
   * @param {string} store
   * @param {object} attrs
   */
  update: function(store, attrs) {
    _data[store] = _.merge({}, this.get(store), attrs);
    this.emitChange(store);
  },

  /*
   * @param {string} store
   */
  del: function(store) {
    delete _data[store];
    this.emitChange(store);
  },



  // Event Listeners

  /*
   * @param {string} store
   */
  emitChange: function(store) {
    this.emit(StoreConstants.CHANGE_EVENT + store);
  },

  /*
   * @param {string} store
   * @param {function} callback
   */
  addChangeListener: function(store, callback) {
    this.on(StoreConstants.CHANGE_EVENT + store, callback);
  },

  /*
   * @param {string} store
   * @param {function} callback
   */
  removeChangeListener: function(store, callback) {
    this.removeListener(StoreConstants.CHANGE_EVENT + store, callback);
  }

});

GlobalStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case StoreConstants.STORE_SET:
      GlobalStore.set(action.store, action.attrs);
      break;
    case StoreConstants.STORE_UPDATE:
      GlobalStore.update(action.store, action.attrs);
      break;
    case StoreConstants.STORE_DELETE:
      GlobalStore.del(action.store);
      break;
  }
});

module.exports = GlobalStore;
