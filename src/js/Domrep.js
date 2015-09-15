var React = require('react');
var PropTypes = React.PropTypes;

var selectedFunctions = {
  "perceptiveEx": "perceptiveIn",
  "perceptiveIn": "perceptiveEx",
  "judgingEx": "judgingIn",
  "judgingIn": "judgingEx"
};

var Domrep = React.createClass({
  getInitialState: function() {
    return {
      view: ""
    };
  },

  handleDominant: function(dominant, e) {
    e.preventDefault();
    this.props.onDomFunction(dominant);
    this.setState({
      view: dominant
    });
  },

  handleResultPageChange: function(e) {
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
        <div>
          which one is dominant? Does it fit with the repressed associated?
        </div>
        <ul>
          { this.renderList() }
        </ul>
        <button
          onClick={ this.handlePageBack }
          >
            Mmh..doesn't fit.
        </button>
        <button
          onClick={ this.handleResultPageChange }
          >
            Go on!
        </button>
      </div>
    );
  },

  renderList: function() {
    return Object.keys(selectedFunctions).map(this.renderFunctions);
  },

  renderFunctions: function(key) {
    return <li
            key={ key }
            >
             <a href="#"
                onClick={ this.handleDominant.bind(this, this.props[key]) }
                >
                  { this.props[key] }
             </a>
             { this.state.view === this.props[key] ? (<div>your repressed is { this.props[selectedFunctions[key]] }</div>) : (<div></div>) }
           </li>
  }

});

module.exports = Domrep;
