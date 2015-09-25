var React = require('react');
var PropTypes = React.PropTypes;

var Navbar = React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    onPageBack: PropTypes.func.isRequired,
    onPageHelp: PropTypes.func.isRequired
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
          <button
            className="navbar__button"
            onClick={ this.handlePageBack }
            >
            <img className="navbar__arrow-left" src="/imgs/arrow-left.svg"/>
          </button>
          <div className="navbar__title">
            <div className="navbar__title__content">{ this.props.title }</div>
          </div>
          <button
            className="navbar__button"
            onClick={ this.handlePageHelp }>
            <img className="navbar__question-mark" src="/imgs/question.svg"/>
          </button>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
