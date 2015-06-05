/* * *
 * App
 * * */

var React = require("react");
var Router = require('react-router');
var AppRoutes = require('../components/Routes/AppRoutes.jsx');

Router.run(AppRoutes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler />, document.getElementById('main'));
});
