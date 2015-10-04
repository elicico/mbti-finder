var React = require('react');
var Modal = require('./Modal');
var Tappable = require('react-tappable');
var PropTypes = React.PropTypes;

var DATA = require("./data.json").domrep;

var Dominant = React.createClass({

  propTypes: {
    exFunctions: PropTypes.array.isRequired,
    setModalContent: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      activeDomFunction: null,
      inPerceiving: null,
      inJudging: null
    };
  },

  componentDidMount: function () {
    this.props.setModalContent(
      <div>
        <div className="modal__content__title">Finding the Dominant function</div>
        <div className="modal__content__text">Now that you have identified the four functions that you think are being used, all is left to do is to recognise the dominant one among them. It is usually the function that manifests itself most frequently, or as a sort of constant and more or less underlying attitude in the person. By clicking on one of the buttons you’ll see a brief list of the main aspects through which that function expresses itself in the dominant position of the stack; you will also see another brief list that generalizes the behaviour of the inferior function related. That way it will be easier to determine the dominant function, especially if it’s an introverted one, thus less visible in the outer world.</div>
      </div>
    );
    this.setInFunctions();
  },

  setInFunctions: function() {
    var inPerceiving = this.props.exFunctions[0] === "Ne" ? "Si" : "Ni";
    var inJudging = this.props.exFunctions[1] === "Te" ? "Fi" : "Ti";
    this.setState({
      inPerceiving: inPerceiving,
      inJudging: inJudging
    });
  },

  handleButtonClick: function(domFunc, e) {
    e.preventDefault();
    this.setState({ activeDomFunction: domFunc });
  },

  handleModalClose: function() {
    this.setState({ activeDomFunction: null });
  },

  handleModalSelect: function(e) {
    e.preventDefault();
    this.props.onSelect(this.state.activeDomFunction);
    this.setState({ activeDomFunction: null });
  },

  render: function() {
    var functions = [
      this.props.exFunctions[0],
      this.props.exFunctions[1],
      this.state.inPerceiving,
      this.state.inJudging
    ];

    return (
      <div className="container-absolute">
        <div className="dominants">
          <div className="functions__label">
            Which function is the dominant one?
          </div>
          { functions.map(this.renderFunctionButton) }
          { this.renderModal() }
        </div>
      </div>
    );
  },

  renderFunctionButton: function(domFunc) {
    return (
      <Tappable
        onTap={ this.handleButtonClick.bind(this, domFunc) }
        classBase="dominant__tile-"
        pressDelay={ 0 }
        className="dominant__tile"
      >
        { domFunc }
        <span className="functions__tile__read">
          view
        </span>
      </Tappable>
    );
  },

  renderModal: function() {

      var rightObject = DATA.find(function(elem) {
        return this.state.activeDomFunction === elem.dominant;
      }.bind(this));

      return (
        <Modal
          isOpen={ !!this.state.activeDomFunction }
          onClose={ this.handleModalClose }
        >
          {
            rightObject &&
            <div>
              <div
                className="modal__content__title"
                dangerouslySetInnerHTML={{__html: rightObject.domTitle }}
              />
              <div
                className="modal__content__text"
                >
                <ul className='modal__content__text__ul'>
                  { rightObject.domDescription.map(function(listItem) {
                      return <li>{ listItem }</li>;
                    }) }
                </ul>
              </div>
              <div
                className="modal__content__title"
                dangerouslySetInnerHTML={{__html: rightObject.infTitle }}
              />
              <div
                className="modal__content__text"
                >
                <ul className='modal__content__text__ul'>
                  { rightObject.infDescription.map(function(listItem) {
                      return <li>{ listItem }</li>;
                    }) }
                </ul>
              </div>
              <div className="modal__button-wrapper">
                <Tappable
                  onTap={ this.handleModalClose }
                  classBase="modal__button-wrapper__dismiss-button-"
                  pressDelay={ 0 }
                  className="modal__button-wrapper__dismiss-button"
                  onClick={ this.handleModalClose }
                >
                  dismiss
                </Tappable>
                <Tappable
                  onTap={ this.handleModalSelect }
                  classBase="modal__button-wrapper__select-button-"
                  pressDelay={ 0 }
                  className="modal__button-wrapper__select-button"
                >
                  select
                </Tappable>
              </div>
            </div>
          }
        </Modal>
      );
  }

});

module.exports = Dominant;
