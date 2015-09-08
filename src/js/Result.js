var React = require('react');
var PropTypes = React.PropTypes;

var Result = React.createClass({

  handleAcronym: function() {
    switch (this.props.domFunction) {
      case this.props.judgingIn:
        return (
          <div>
            Your type is I{ this.props.perceptiveEx.slice(0, 1) }{ this.props.judgingIn.slice(0, 1) }P
          </div>
        );
      case this.props.judgingEx:
        return (
          <div>
            Your type is E{ this.props.perceptiveIn.slice(0, 1) }{ this.props.judgingEx.slice(0, 1) }J
          </div>
        );
      case this.props.perceptiveIn:
        return (
          <div>
            Your type is I{ this.props.perceptiveIn.slice(0, 1) }{ this.props.judgingEx.slice(0, 1) }J
          </div>
        );
      case this.props.perceptiveEx:
        return (
          <div>
            Your type is E{ this.props.perceptiveEx.slice(0, 1) }{ this.props.judgingIn.slice(0, 1) }P
          </div>
        );
    }
    debugger;
  },

  render: function() {
    return (
      <div>
        { this.handleAcronym() }
      </div>
    );
  }

});

module.exports = Result;
