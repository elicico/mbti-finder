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
          <div className="result__tile">
            { this.acronym() }
          </div>
          <div className="result__label">
            useful description links:
          </div>
          <a
            href={ `https://www.personalitypage.com/html/${ this.acronym() }.html` }
            target="_blank"
            className="result__link"
            >
            portrait
          </a>
          <br/>
          <a
            href={ `http://www.humanmetrics.com/personality/${ this.acronym() }` }
            target="_blank"
            className="result__link"
            >
            functional analysis
          </a>
          <br/>
          <a
            href={ `http://funkymbtifiction.tumblr.com/tagged/c%3A+${ this.acronym() }` }
            target="_blank"
            className="result__link"
            >
            characters in fiction
          </a>
      </div>
      </div>
    );
  },

  acronym: function() {
    var inPerceiving = this.props.exFunctions[0] === "Ne" ? "Si" : "Ni";
    var inJudging = this.props.exFunctions[1] === "Te" ? "Fi" : "Ti";

    switch (this.props.domFunction) {
      case inJudging:
        return `I${ this.props.exFunctions[0].slice(0, 1) }${ inJudging.slice(0, 1) }P`;
      case this.props.exFunctions[1]:
        return `E${ inPerceiving.slice(0, 1) }${ this.props.exFunctions[1].slice(0, 1) }J`;
      case inPerceiving:
        return `I${ inPerceiving.slice(0, 1) }${ this.props.exFunctions[1].slice(0, 1) }J`;
      case this.props.exFunctions[0]:
        return `E${ this.props.exFunctions[0].slice(0, 1) }${ inJudging.slice(0, 1) }P`;
    };
  }

});

module.exports = Result;
