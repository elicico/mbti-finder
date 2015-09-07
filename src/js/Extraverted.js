var React = require('react');
var PropTypes = React.PropTypes;

var Extraverted = React.createClass({
  getInitialState: function() {
    return {
      perceptiveExtr: null,
      judgingExtr: null
    };
  },

  render: function() {
    return (
      <div>
        <h1>Vediamo se funzionano le cose</h1>
        <p className="question">Qui ci va la domanda per la funzione estroversa percettiva</p>
        <form>
          <input
            type="radio"
            name="perceptive-extr"
            onChange={ this.handlePerceptiveChange }
            value="Ne"
            >
            Intuizione estroversa
          </input>
          <br></br>
          <input
            type="radio"
            name="perceptive-extr"
            onChange={ this.handlePerceptiveChange }
            value="Se"
            >Sensazione estroversa</input>
        </form>
        <p className="question">Qui ci va la domanda per la funzione estroversa giudicante</p>
        <form>
           <input
             type="radio"
             name="judging-extr"
             onChange={ this.handleJudgingChange }
             value="Te"
             >
             Pensiero estroverso</input>
           <br></br>
           <input
             type="radio"
             name="judging-extr"
             onChange={ this.handleJudgingChange }
             value="Fe"
             >
             Sentimento estroverso</input>
        </form>
        <button
          onClick={ this.handlePageChange }
          >
            Go on!
        </button>
      </div>
    );
  },

  handlePerceptiveChange: function(e) {
      this.props.perceptiveEx(e.currentTarget.value);
  },

  handleJudgingChange: function(e) {
      this.props.judgingEx(e.currentTarget.value);
  },

  handlePageChange: function(e) {
    e.preventDefault();
    this.props.pageChange();
  }

  });

module.exports = Extraverted;
