var keymirror = require('keymirror');

var AppConstants = {
  PayloadSources: keymirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  StoreConstants: keymirror({
    // GlobalStore Events
    CHANGE_EVENT: null,
    STORE_SET: null,
    STORE_UPDATE: null,
    STORE_DELETE: null,

    // Store Types
    EVENTS_STORE: null,
    RACE_STORE: null,
    RESULTS_STORE: null,
    SEARCH_RACE_STORE: null,

    FORM_STORE: null
  }),

  EventConstants: keymirror({
    GET_ALL_EVENTS: null,
    GOT_ALL_EVENTS: null,

    GET_ALL_RACES: null,
    GOT_ALL_RACES: null,

    GET_ALL_RESULTS: null,
    GOT_ALL_RESULTS: null,

    GET_SEARCH_EVENT: null,
    GOT_SEARCH_EVENT: null
  })
};

module.exports = AppConstants;
