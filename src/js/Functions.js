var React = require('react');
var Modal = require('./Modal');
var PropTypes = React.PropTypes;

var DATA = {
  "judg": [
    {
      buttonLabel: "Te - Fi",
      extraverted: "Te",
      modalTitleEx: "xxxx",
      modalDescriptionEx: "yyyy",
      modalTitleIn: "xxxx2",
      modalDescriptionIn: "yyyy2"
    },
    {
      buttonLabel: "Fe - Ti",
      extraverted: "Fe",
      modalTitleEx: "xxxxA",
      modalDescriptionEx: "yyyyA",
      modalTitleIn: "xxxxA2",
      modalDescriptionIn: "yyyyA2"
    }
  ],
  "perc": [
    {
      buttonLabel: "Ne - Si",
      extraverted: "Ne",
      modalTitleEx: "xxxx",
      modalDescriptionEx: "yyyy",
      modalTitleIn: "xxxx2",
      modalDescriptionIn: "yyyy2"
    },
    {
      buttonLabel: "Se - Ni",
      extraverted: "Se",
      modalTitleEx: "xxxxA",
      modalDescriptionEx: "yyyyA",
      modalTitleIn: "xxxxA2",
      modalDescriptionIn: "yyyyA2"
    }
  ]
};

var Functions = React.createClass({
  propTypes: {
    setModalContent: PropTypes.func.isRequired,
    isJudging: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return { activeExFunction: null };
  },

  componentDidMount: function () {
    if (!this.props.isJudging) {
      this.props.setModalContent(
        <div>
          <div className="modal__content__title">Typing perceiving functions</div>
          <div className="modal__content__text">Which couple is the right one? <br/>Well, when trying to define someone’s MBTI type, you should first look at the extroverted functions. <br/>They are more expressed in the outer world than the introverted ones, thus easier to notice. <br/>Also, in the couple extroverted/introverted, one is always more developed than the other. So if you think you have recognized many aspects of one of the two functions of a couple but can’t well identify the characteristics of the other one, it may be because it is a dominant/inferior couple. <br/>But don’t worry, we will get there later (:</div>
        </div>
      );
    } else {
      this.props.setModalContent(
        <div>
          <div className="modal__content__title">Typing judging functions</div>
          <div className="modal__content__text">Which couple is the right one? <br/>Well, when trying to define someone’s MBTI type, you should first look at the extroverted functions. <br/>They are more expressed in the outer world than the introverted ones, thus easier to notice. <br/>Also, in the couple extroverted/introverted, one is always more developed than the other. So if you think you have recognized many aspects of one of the two functions of a couple but can’t well identify the characteristics of the other one, it may be because it is a dominant/inferior couple. <br/>But don’t worry, we will get there later (:</div>
        </div>
      );
    }
  },

  handleButtonClick: function(exFunction, e) {
    e.preventDefault();
    this.setState({ activeExFunction: exFunction });
  },

  handleModalClose: function() {
    this.setState({ activeExFunction: null });
  },

  handleModalSelect: function(e) {
    e.preventDefault();
    this.props.onSelect(this.state.activeExFunction);
    this.setState({ activeExFunction: null });
  },

  render: function() {

    var data = DATA[this.props.isJudging ? "judg" : "perc"];

    return (
      <div className="container-absolute">
        <div className="functions">
          <div className="functions__label">
            What combination of functions is being used?
          </div>
          { data.map(this.renderFunctionButton) }
          { this.renderModal() }
        </div>
      </div>
    );
  },

  renderFunctionButton: function(elem) {
    return (
      <button
        className="functions__tile"
        onClick={ this.handleButtonClick.bind(this, elem.extraverted) }
      >
        { elem.buttonLabel }
        <span className="functions__tile__read">
          read more
        </span>
      </button>
    );
  },

  renderModal: function() {
      var data = DATA[this.props.isJudging ? "judg" : "perc"];

      var rightObject = data.find(function(elem) {
        return this.state.activeExFunction === elem.extraverted;
      }.bind(this));

      return (
        <Modal
          isOpen={ !!this.state.activeExFunction }
          onClose={ this.handleModalClose }
        >
          {
            rightObject &&
            <div>
              <div className="modal__content__title">
                { rightObject.modalTitleEx }
              </div>
              <div className="modal__content__text">
                { rightObject.modalDescriptionEx }
              </div>
              <div className="modal__content__title">
                { rightObject.modalTitleIn }
              </div>
              <div className="modal__content__text">
                { rightObject.modalDescriptionIn }
              </div>
              <button
                onClick={ this.handleModalClose }
              >
                dismiss
              </button>
              <button
                onClick={ this.handleModalSelect }
              >
                select
              </button>
            </div>
          }
        </Modal>
      );
  }

});

module.exports = Functions;
