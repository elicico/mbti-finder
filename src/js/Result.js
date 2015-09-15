var React = require('react');
var PropTypes = React.PropTypes;

var Result = React.createClass({
  render: function() {
    switch (this.props.domFunction) {
      case this.props.judgingIn:
        return (
          <div>
            Your type is I{ this.props.perceptiveEx[0] }{ this.props.judgingIn[0] }P
          </div>
        );
      case this.props.judgingEx:
        return (
          <div>
            Your type is E{ this.props.perceptiveIn[0] }{ this.props.judgingEx[0] }J
          </div>
        );
      case this.props.perceptiveIn:
        return (
          <div>
            Your type is I{ this.props.perceptiveIn[0] }{ this.props.judgingEx[0] }J
          </div>
        );
      case this.props.perceptiveEx:
        return (
          <div>
            Your type is E{ this.props.perceptiveEx[0] }{ this.props.judgingIn[0] }P
          </div>
        );
    };
  }

});

module.exports = Result;
