var React = require('react');
var Tappable = require('react-tappable');
var Constellation = require('./Constellation');

var PropTypes = React.PropTypes;

var Splash = React.createClass({
  propTypes: {
    onContinue: PropTypes.func.isRequired
  },

  handlePageChange: function(e) {
    e.preventDefault();
    this.props.onContinue();
  },

  componentDidMount: function() {
    var constellation = new Constellation(
      this.refs.canvas.getDOMNode(),
      {
        line: {
          color: 'rgba(22, 40, 139, 0.97)',
          width: 0.2
        }
      }
    );
    constellation.init();
  },

  render: function() {
    return (
      <div className="container-absolute">
        <div className="splash">
          <canvas className="splash__canvas" ref="canvas" />
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
