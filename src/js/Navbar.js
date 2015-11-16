var React = require('react');
var Tappable = require('react-tappable');
var PropTypes = React.PropTypes;

var Navbar = React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    onPageBack: PropTypes.func.isRequired,
    onPageHelp: PropTypes.func.isRequired,
    isHelpVisible: PropTypes.bool
  },

  handlePageBack: function(e) {
    e.preventDefault();
    this.props.onPageBack();
  },

  handlePageHelp: function(e) {
    e.preventDefault();
    this.props.onPageHelp();
  },

  render: function() {
    return (
      <div className="container-absolute--nav">
        <div className="navbar">
          <Tappable
            onTap={ this.handlePageBack }
            classBase="navbar__button-"
            pressDelay={ 0 }
            className="navbar__button"
            >
            <img className="navbar__arrow-left" src="/imgs/arrow-left.svg"/>
          </Tappable>
          <div className="navbar__title">
            <div className="navbar__title__content">{ this.props.title }</div>
          </div>
          {
            this.props.isHelpVisible &&
            <Tappable
              onTap={ this.handlePageHelp }
              classBase="navbar__button-"
              pressDelay={ 0 }
              className="navbar__button"
              >
              <img className="navbar__question-mark" src="/imgs/question.svg"/>
            </Tappable>
          }
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
