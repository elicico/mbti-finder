var React = require('react');
var Tappable = require('react-tappable');
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
            Find out what type people around you are!
          </div>
          <Tappable
            onTap={ this.handlePageChange }
            classBase="splash__button-"
            className="splash__button"
            pressDelay={ 0 }
            >
            Start typing
          </Tappable>
        </div>
      </div>
    );
  }

});

module.exports = Splash;
