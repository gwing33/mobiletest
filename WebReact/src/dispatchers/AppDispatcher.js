/* * *
 * Athlete App Dispatcher
 * - - - - - - - - - - -
 * Every Action should come through this to update the views.
 * * */

var _ = require('lodash');
var Dispatcher = require('flux').Dispatcher;

var AppConstants = require('../constants/AppConstants');
var PayloadSources = AppConstants.PayloadSources;

var AppDispatcher = _.assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
