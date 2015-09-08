var React = require('react');
var Extraverted = require("./Extraverted");
var Introverted = require("./Introverted");
var Domrep = require("./Domrep");
var Result = require("./Result");

var App = React.createClass({
  getInitialState: function() {
    return {
      view: "extraverted",
      perceptiveEx: null,
      judgingEx: null,
      domFunction: null
    };
  },

  handleStateChange: function(key, value) {
    var toChange = {};
    toChange[key] = value;
    this.setState(toChange);
  },

  handlePageChange: function(view) {
    this.setState({ view: view });
  },

  handlePageBack: function() {
    this.setState({
      judgingEx: null,
      perceptiveEx: null,
      view: "extraverted"
    });
  },

  render: function() {
    var perceptiveIn = this.state.perceptiveEx === "Ne" ?
      "Si" : "Ni";

    var judgingIn = this.state.judgingEx === "Te" ?
      "Fi" : "Ti";

    switch (this.state.view) {
      case "extraverted":
        return this.renderExtraverted();
      case "introverted":
        return this.renderIntroverted(perceptiveIn, judgingIn);
      case "domrep":
        return this.renderDomrep(perceptiveIn, judgingIn);
      case "result":
        return this.renderResult(perceptiveIn, judgingIn);
    }
  },

  renderExtraverted: function() {
    return (
      <Extraverted
        onPerceptiveEx={ this.handleStateChange.bind(this, "perceptiveEx") }
        onJudgingEx={ this.handleStateChange.bind(this, "judgingEx") }
        onPageChange={ this.handlePageChange.bind(this, "introverted") }
      />
    );
  },

  renderIntroverted: function(perceptiveIn, judgingIn) {
    return (
      <Introverted
        perceptiveIn={ perceptiveIn }
        judgingIn={ judgingIn }
        onPageChange={ this.handlePageChange.bind(this, "domrep") }
        onPageBack={ this.handlePageBack }
      />
    );
  },

  renderDomrep: function(perceptiveIn, judgingIn) {
    return (
      <Domrep
        perceptiveEx={ this.state.perceptiveEx }
        judgingEx={ this.state.judgingEx }
        perceptiveIn={ perceptiveIn }
        judgingIn={ judgingIn }
        onDomFunction={ this.handleStateChange.bind(this, "domFunction") }
        onPageChange={ this.handlePageChange.bind(this, "result") }
        onPageBack={ this.handlePageBack }
      />
    );
  },

  renderResult: function(perceptiveIn, judgingIn) {
    return (
      <Result
        perceptiveEx={ this.state.perceptiveEx }
        judgingEx={ this.state.judgingEx }
        domFunction={ this.state.domFunction }
        perceptiveIn={ perceptiveIn }
        judgingIn={ judgingIn }
      />
    );
  }
});

module.exports = App;
