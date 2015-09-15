var React = require('react');
var PropTypes = React.PropTypes;

var extraverted = {
  "Ne": "Intuizione estroversa",
  "Se": "Sensazione estroversa",
  "Te": "Pensiero estroverso",
  "Fe": "Sentimento estroverso"
};

var Extraverted = React.createClass({
  handleExtravertedChange: function(key, value, e) {
    if (key === "perceptiveEx") {
      this.props.onPerceptiveEx(value);
    } else {
      this.props.onJudgingEx(value);
    };
  },

  handlePageChange: function(e) {
    e.preventDefault();
    this.props.onPageChange();
  },

  render: function() {

    return (
      <div>
        <h1>Vediamo se funzionano le cose</h1>
        <p className="question">Qui ci va la domanda per la funzione estroversa percettiva</p>
        <form>
          { this.renderExtraverted("perceptiveEx", "Ne") }
          <br/>
          { this.renderExtraverted("perceptiveEx", "Se") }
        </form>
        <p className="question">Qui ci va la domanda per la funzione estroversa giudicante</p>
        <form>
          { this.renderExtraverted("judgingEx", "Te") }
          <br/>
          { this.renderExtraverted("judgingEx", "Fe") }
        </form>
        <button
          onClick={ this.handlePageChange }
          >
            Go on!
        </button>
      </div>
    );
  },

  renderExtraverted: function(key, value) {
    return <input
            type="radio"
            name= { key }
            onChange={ this.handleExtravertedChange.bind(this, key, value) }
            value= { value }
            checked={ this.props[key] === value }
          >
            { extraverted[value] }
          </input>
  }
});

module.exports = Extraverted;
