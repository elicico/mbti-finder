var React = require('react');

var Portal = React.createClass({
  componentDidMount: function() {
    this.portal = document.createElement('div');
    document.getElementById("portals").appendChild(this.portal);
    this.renderPortalContent();
  },

  componentDidUpdate: function() {
    this.renderPortalContent();
  },

  componentWillUnmount: function() {
    setTimeout(
      function() {
        React.unmountComponentAtNode(this.portal);
      }.bind(this),
      5000
    );
  },

  render: function() {
    return false;
  },

  renderPortalContent: function() {
    React.render(
      <div>{ this.props.children }</div>,
      this.portal
    );
  }
});

module.exports = Portal;
