var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Base = require("../Base.jsx");
var EventsPage = require('../../pages/EventsPage.jsx');
var RacePage = require('../../pages/RacePage.jsx');
var FormPage = require('../../pages/FormPage.jsx');

module.exports = <Route path="/" handler={Base}>
  <Route name="RacePage" path="Race/:event_id" handler={RacePage} />
  <Route name="FormPage" path="form" handler={FormPage} />

  <DefaultRoute name='EventsPage' handler={EventsPage} />
</Route>;
