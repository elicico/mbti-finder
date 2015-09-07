var React = require('react');
var Extraverted = require("./Extraverted");
var Introverted = require("./Introverted");
var Domrep = require("./Domrep");
var Result = require("./Result");
var PropTypes = React.PropTypes;

var App = React.createClass({
  getInitialState: function() {
    return {
      view: "extraverted",
      perceptiveExtr: null,
      judgingExtr: null
    };
  },

  handleView: function() {
    switch (this.state.view) {
      case "extraverted":
        return <Extraverted
          judgingEx={ this.handleJudgingChange }
          perceptiveEx={ this.handlePerceptiveChange }
          />;
      case "introverted":
        return <Introverted />;
      case "domrep":
        return <Domrep />;
      case "result":
        return <Result />;
    }
  },

  handleJudgingChange: function(whatiwant) {
    this.setState({
      judgingExtr: whatiwant
    });
  },

  handlePerceptiveChange: function(whatiwant) {
    this.setState({
      perceptiveExtr: whatiwant
    });
    debugger;
  },

  render: function() {
    return (
      <div>
        { this.handleView() }
      </div>
    );
  }

});

module.exports = App;
