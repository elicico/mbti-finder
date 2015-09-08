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
          perceptiveEx={ this.handlePerceptiveExtrChange }
          judgingEx={ this.handleJudgingExtrChange }
          pageChange={ this.handlePageChange }
          />;
      case "introverted":
        return <Introverted
          perceptiveEx={ this.props.perceptiveEx }
          judgingEx={ this.props.judgingEx }
          perceptiveIn={ this.handlePerceptiveIntrClick }
          judgingIn={ this.handleJudgingIntrClick }
          pageChange={ this.handlePageChange }
          pageBack={ this.handlePageBack }
          />;
      case "domrep":
        return <Domrep
          perceptiveEx={ this.props.perceptiveEx }
          judgingEx={ this.props.judgingEx }
          perceptiveIn={ this.props.perceptiveIn }
          judgingIn={ this.props.judgingIn }
          domFunction={ this.handleDomClick }
          pageChange={ this.handleResultPageChange }
          />;
      case "result":
        return <Result
          perceptiveEx={ this.props.perceptiveEx }
          judgingEx={ this.props.judgingEx }
          perceptiveIn={ this.props.perceptiveIn }
          judgingIn={ this.props.judgingIn }
          domFunction={ this.props.domFunction }
          />;
    }
  },

  handlePerceptiveExtrChange: function(percex) {
    this.props.perceptiveEx = percex;
  },

  handleJudgingExtrChange: function(judgex) {
    this.props.judgingEx = judgex;
  },

  handlePerceptiveIntrClick: function(percin) {
    this.props.perceptiveIn = percin;
  },

  handleJudgingIntrClick: function(judgin) {
    this.props.judgingIn = judgin;
  },

  handleDomClick: function(dominant) {
    this.props.domFunction = dominant;
  },

  handlePageChange: function() {
    if (this.props.perceptiveEx && this.props.judgingEx !== undefined) {
      if (this.props.perceptiveIn && this.props.judgingIn !== undefined) {
        this.setState({
          view: "domrep"
        });
      } else {
          this.setState({
            view: "introverted"
          });
        };
    };
  },

  handleResultPageChange: function() {
      this.setState({
        view: "result"
      });
  },

  handlePageBack: function() {
    this.setState({
      view: "extraverted"
    });
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
