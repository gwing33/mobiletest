var React = require('react');

var StoreConstants = require('../constants/AppConstants').StoreConstants;
var BaseStoreMixin = require('../mixins/BaseStoreMixin');
var Input = require('../components/shared/Input.jsx');

var _STORE = StoreConstants.FORM_STORE;

var FormPage = React.createClass({

  mixins: [BaseStoreMixin(_STORE)],

  render: function() {
    return <form>
      <Input store={_STORE} name='name' type='text' />
      <br />
      <Input store={_STORE} name='last_name' type='text' />
    </form>;
  }
});

module.exports = FormPage;
