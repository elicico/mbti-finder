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
        return <Domrep />;
      case "result":
        return <Result />;
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

  handlePageChange: function() {
    if (this.props.perceptiveEx && this.props.judgingEx !== null) {
      if (this.props.perceptiveIn && this.props.judgingIn !== null) {
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
