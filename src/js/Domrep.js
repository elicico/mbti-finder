var React = require('react');
var PropTypes = React.PropTypes;

var Domrep = React.createClass({
  getInitialState: function() {
    return {
      view: ""
    };
  },

  handlePercex: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.perceptiveEx);
    this.setState({
      view: this.props.perceptiveEx
    });
  },

  handlePercin: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.perceptiveIn);
    this.setState({
      view: this.props.perceptiveIn
    });
  },

  handleJudgex: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.judgingEx);
    this.setState({
      view: this.props.judgingEx
    });
  },

  handleJudgin: function(e) {
    e.preventDefault();
    this.props.domFunction(this.props.judgingIn);
    this.setState({
      view: this.props.judgingIn
    });
  },

  render: function() {
    return (
      <div>
        <div>
          which one is dominant? Does it fit with the repressed associated?
        </div>
        <ul>
          <li>
            <a href="#"
              onClick={ this.handlePercex }
              >
              { this.props.perceptiveEx }
            </a>
            { this.state.view === this.props.perceptiveEx ? (<div>your repressed is { this.props.perceptiveIn }</div>) : (<div></div>) }
          </li>
          <li>
            <a href="#"
              onClick={ this.handlePercin }
              >
              { this.props.perceptiveIn }
            </a>
            { this.state.view === this.props.perceptiveIn ? (<div>your repressed is { this.props.perceptiveEx }</div>) : (<div></div>) }
          </li>
          <li>
            <a href="#"
              onClick={ this.handleJudgex }
              >
              { this.props.judgingEx }
            </a>
            { this.state.view === this.props.judgingEx ? (<div>your repressed is { this.props.judgingIn }</div>) : (<div></div>) }
          </li>
          <li>
            <a href="#"
              onClick={ this.handleJudgin }
              >
              { this.props.judgingIn }
            </a>
            { this.state.view === this.props.judgingIn ? (<div>your repressed is { this.props.judgingEx }</div>) : (<div></div>) }
          </li>
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

  handleResultPageChange: function(e) {
    e.preventDefault();
    this.props.pageChange();
  },

  handlePageBack: function(e) {
    e.preventDefault();
    this.props.pageBack();
  }

});

module.exports = Domrep;
