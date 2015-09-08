var React = require('react');
var PropTypes = React.PropTypes;

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
        { this.renderPerceptiveIntrView() }
        { this.renderJudgingIntrView() }
        <button onClick={ this.handlePageChange }>Go on!</button>
        <button onClick={ this.handlePageBack }>Go back!</button>
      </div>
    );
  },

  renderPerceptiveIntrView: function() {
    return (
      <div>
        <div>Riconosci { this.props.perceptiveIn }?</div>
        <div>bla bla bla</div>
      </div>
    );
  },

  renderJudgingIntrView: function() {
    return (
      <div>
        <div>Riconosci { this.props.judgingIn }?</div>
        <div>bla bla bla</div>
      </div>
    );
  },
});

module.exports = Introverted;
