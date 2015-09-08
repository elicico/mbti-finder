var React = require('react');
var PropTypes = React.PropTypes;

var Introverted = React.createClass({

  handlePerceptiveIntrView: function() {
    if(this.props.perceptiveEx === "Ne") {
      this.props.perceptiveIn("Si");
      return (
        <div>
          <div>
            Riconosci Si?
          </div>
          <div>
            bla bla bla
          </div>
        </div>
      );
    } else {
        this.props.perceptiveIn("Ni");
        return (
          <div>
            <div>
              Riconosci Ni?
            </div>
            <div>
              bla bla bla
            </div>
          </div>
        );
    }
  },

  handleJudgingIntrView: function() {
    if(this.props.judgingEx === "Te") {
      this.props.judgingIn("Fi");
      return (
        <div>
          <div>
            Riconosci Fi?
          </div>
          <div>
            bla bla bla
          </div>
        </div>
      );
    } else {
        this.props.judgingIn("Ti");
        return (
          <div>
            <div>
              Riconosci Ti?
            </div>
            <div>
              bla bla bla
            </div>
          </div>
        );
    }
  },

  render: function() {
    return (
      <div>
        <div>
          { this.handlePerceptiveIntrView() }
        </div>
        <div>
          { this.handleJudgingIntrView() }
        </div>
        <button
          onClick={ this.handlePageChange }
          >
            Go on!
        </button>
        <button
          onClick={ this.handlePageBack }
          >
            Go back!
        </button>
      </div>
    );
  },

  handlePageChange: function(e) {
    e.preventDefault();
    this.props.pageChange();
  },

  handlePageBack: function(e) {
    e.preventDefault();
    this.props.pageBack();
  }

});

module.exports = Introverted;
