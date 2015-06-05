var request = require('superagent');
var AppServerActions = require('../actions/AppServerActions');
var StoreConstants = require('../constants/AppConstants').StoreConstants;

var CtApi = {

  getAllEventsUrl: '/ct/events',
  getAllRacesUrl: '/ct/races',
  getAllResultsUrl: '/ct/results',
  getSearchEventUrl: '/ct/search',

  getAllEvents: function(page, limit) {
    // Defaults
    page = page || 1;
    limit = limit || 25;

    request
      .get( CtApi.getAllEventsUrl )
      .query({
        page: page,
        limit: limit
      })
      .accept('json')
      .end(function(err, res) {
        AppServerActions.updateGlobalStore(err, StoreConstants.EVENTS_STORE, res.body);
      });
  },

  getAllRaces: function(event_id, page, limit) {
    // Defaults
    page = page || 1;
    limit = limit || 25;

    request
      .get( CtApi.getAllRacesUrl )
      .query({
        eventID: event_id,
        page: page,
        limit: limit
      })
      .accept('json')
      .end(function(err, res) {
        AppServerActions.updateGlobalStore(err, StoreConstants.RACE_STORE, res.body);
      });
  },

  getAllResults: function(event_id, race_id, bracket_id, interval_id, page, limit) {
    // Defaults
    page = page || 1;
    limit = limit || 25;

    request
      .get( CtApi.getAllResultsUrl )
      .query({
        eventID: event_id,
        raceID: race_id,
        bracketID: bracket_id,
        intervalID: interval_id,
        page: page,
        limit: limit
      })
      .accept('json')
      .end(function(err, res) {
        AppServerActions.updateGlobalStore(err, StoreConstants.RESULTS_STORE, res.body);
      });
  },

  getSearchEvent: function(event_id, query, id, page, start, limit) {
    //eventID=10440&query=123&id=ext-record-96&page=1&start=0&limit=25
    request
      .get( CtApi.getSearchEventUrl )
      .query({
        eventID: event_id,
        query: query,
        id: id,
        start: start,
        page: page,
        limit: limit
      })
      .accept('json')
      .end(function(err, res) {
        AppServerActions.updateGlobalStore(err, StoreConstants.SEARCH_RACE_STORE, res.body);
      });
  }
};

module.exports = CtApi;
