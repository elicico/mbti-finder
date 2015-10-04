var React = require('react');
var Modal = require('./Modal');
var PropTypes = React.PropTypes;

var Result = React.createClass({

  propTypes: {
    exFunctions: PropTypes.array.isRequired,
    setModalContent: PropTypes.func.isRequired
  },

  componentDidMount: function () {
    this.props.setModalContent(
      <div>
        <div className="modal__content__title">Finding the Dominant function</div>
        <div className="modal__content__text">Now that you have identified the four functions that you think are being used, all is left to do is to recognise the dominant one among them. It is usually the function that manifests itself most frequently, or as a sort of constant and more or less underlying attitude in the person. By clicking on one of the buttons you’ll see a brief list of the main aspects through which that function expresses itself in the dominant position of the stack; you will also see another brief list that generalizes the behaviour of the inferior function related. That way it will be easier to determine the dominant function, especially if it’s an introverted one, thus less visible in the outer world.</div>
      </div>
    );
  },

  render: function() {
    return (
      <div className="container-absolute">
        <div className="result">
          <div className="result__label">
            Your type is
          </div>
          { this.renderResult() }
      </div>
      </div>
    );
  },

  renderResult: function() {

    var inPerceiving = this.props.exFunctions[0] === "Ne" ? "Si" : "Ni";
    var inJudging = this.props.exFunctions[1] === "Te" ? "Fi" : "Ti";

    switch (this.props.domFunction) {
      case inJudging:
        return (
          <div className="result__tile">
            I{ this.props.exFunctions[0].slice(0, 1) }{ inJudging.slice(0, 1) }P
          </div>
        );
      case this.props.exFunctions[1]:
        return (
          <div className="result__tile">
            E{ inPerceiving.slice(0, 1) }{ this.props.exFunctions[1].slice(0, 1) }J
          </div>
        );
      case inPerceiving:
        return (
          <div className="result__tile">
            I{ inPerceiving.slice(0, 1) }{ this.props.exFunctions[1].slice(0, 1) }J
          </div>
        );
      case this.props.exFunctions[0]:
        return (
          <div className="result__tile">
            E{ this.props.exFunctions[0].slice(0, 1) }{ inJudging.slice(0, 1) }P
          </div>
        );
    };
  }

});

module.exports = Result;
