var React = require('react');
var PropTypes = React.PropTypes;

var Domrep = React.createClass({

  handlePercex: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.perceptiveEx);
  },

  handlePercin: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.perceptiveIn);
  },

  handleJudgex: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.judgingEx);
  },

  handleJudgin: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.judgingIn);
  },

  render: function() {
    return (
      <div>
        <div>
          which one is dominant? Does it fit with the repressed associated?
        </div>
        <ul>
          <li>
            <a href="#"
              onClick={ this.handlePercex }
              >
              { this.props.perceptiveEx }
            </a>
          </li>
          <li>
            <a href="#"
              onClick={ this.handlePercin }
              >
              { this.props.perceptiveIn }
            </a>
          </li>
          <li>
            <a href="#"
              onClick={ this.handleJudgex }
              >
              { this.props.judgingEx }
            </a>
          </li>
          <li>
            <a href="#"
              onClick={ this.handleJudgin }
              >
              { this.props.judgingIn }
            </a>
          </li>
        </ul>
        <button
          onClick={ this.handleResultPageChange }
          >
            Go on!
        </button>
      </div>
    );
  },

  handleResultPageChange: function(e) {
    e.preventDefault();
    this.props.pageChange();
  }

});

module.exports = Domrep;
