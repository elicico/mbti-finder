var React = require('react');
var PropTypes = React.PropTypes;

var descriptions = {
  'Si': 'Bla bla bla Si',
  'Ni': 'Bla bla bla Ni',
  'Ti': 'Bla bla bla Ti',
  'Fi': 'Bla bla bla Fi'
};

var Introverted = React.createClass({
  handlePageChange: function(e) {
    e.preventDefault();
    this.props.onPageChange();
  },

  handlePageBack: function(e) {
    e.preventDefault();
    this.props.onPageBack();
  },

  render: function() {
    return (
      <div>
        { this.renderIntrView("perceptiveIn") }
        { this.renderIntrView("judgingIn") }
        <button onClick={ this.handlePageChange }>Go on!</button>
        <button onClick={ this.handlePageBack }>Go back!</button>
      </div>
    );
  },

  renderIntrView: function(key) {
    return (
      <div>
        <div>Riconosci { this.props[key] }?</div>
        <div>{ descriptions[this.props[key]] }</div>
      </div>
    );
  }
});

module.exports = Introverted;
