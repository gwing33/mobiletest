var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants');
var StoreConstants = AppConstants.StoreConstants;
var EventConstants = AppConstants.EventConstants;

var CtApi = require('../apis/CtApi.js');

var AppViewActions = {

  setGlobalStore: function(store, attrs) {
    AppDispatcher.handleViewAction({
      type: StoreConstants.STORE_SET,
      store: store,
      attrs: attrs
    });
  },

  updateGlobalStore: function(store, attrs) {
    AppDispatcher.handleViewAction({
      type: StoreConstants.STORE_UPDATE,
      store: store,
      attrs: attrs
    });
  },

  deleteGlobalStore: function(store) {
    AppDispatcher.handleViewAction({
      type: StoreConstants.STORE_DELETE,
      store: store
    });
  },

  getAllEvents: function(page, limit) {
    CtApi.getAllEvents(page, limit);

    AppDispatcher.handleViewAction({
      action: EventConstants.GET_ALL_EVENTS,
      page: page,
      limit: limit
    });
  },

  getAllRaces: function(event_id, page, limit) {
    CtApi.getAllRaces(event_id, page, limit);

    AppDispatcher.handleViewAction({
      action: EventConstants.GET_ALL_RACES,
      event_id: event_id,
      page: page,
      limit: limit
    });
  },

  getAllResults: function(event_id, race_id, bracket_id, interval_id, page, limit) {
    CtApi.getAllResults(event_id, race_id, bracket_id, interval_id, page, limit);

    AppDispatcher.handleViewAction({
      action: EventConstants.GET_ALL_RESULTS,
      event_id: event_id,
      race_id: race_id,
      bracket_id: bracket_id,
      interval_id: interval_id,
      page: page,
      limit: limit
    });
  },

  getSearchEvent: function(event_id, query, id, page, start, limit) {
    CtApi.getSearchEvent(event_id, query, id, page, start, limit);

    AppDispatcher.handleViewAction({
      action: EventConstants.GET_SEARCH_EVENT,
      event_id: event_id,
      query: query,
      id: id,
      page: page,
      start: start,
      limit: limit
    });
  }

};

module.exports = AppViewActions;
