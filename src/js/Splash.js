var React = require('react');
var PropTypes = React.PropTypes;

var Splash = React.createClass({
  propTypes: {
    onContinue: PropTypes.func.isRequired
  },

  handlePageChange: function(e) {
    e.preventDefault();
    this.props.onContinue();
  },

  render: function() {
    return (
      <div className="container-absolute">
        <div className="splash">
          <div className="splash__title">
            mbti
            <br/>
            <span className="splash__title--small">
              finder
            </span>
          </div>
          <div className="splash__subtitle">
            Find out what types people around you are!
          </div>
          <button
            onClick={ this.handlePageChange }
            className="splash__button"
            >
            Start typing
          </button>
        </div>
      </div>
    );
  }

});

module.exports = Splash;
