var React = require('react');

var Portal = React.createClass({
  componentDidMount() {
    this.portal = document.createElement('div');
    document.getElementById("portals").appendChild(this.portal);
    this.renderPortalContent();
  },

  componentDidUpdate: function() {
    this.renderPortalContent();
  },

  componentWillUnmount() {
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
