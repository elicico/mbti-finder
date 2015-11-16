var React = require('react');
var Modal = require('./Modal');
var Tappable = require('react-tappable');
var PropTypes = React.PropTypes;

var DATA = require("./data.json").functions;

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
          <div className="modal__content__text modal__content__text--help">In the cognitive process, perceiving functions are used when you need to gather information, whether from the external or from internal world. Here you’ll see the two couples that these four functions can make. By clicking on one of the two buttons, you’ll see a list of generalized behaviours of those people who use the two functions selected. In each couple, the extraverted one is easier to notice in the outer world; also, one is usually more developed than the other, so try not to obsess too much over getting a perfect match (:</div>
        </div>
      );
    } else {
      this.props.setModalContent(
        <div>
          <div className="modal__content__title">Typing judging functions</div>
          <div className="modal__content__text modal__content__text--help">In the cognitive process, judging functions are used when you need to make decisions, whether in the external or in the internal world. Here you’ll see the two couples that these four functions can make. By clicking on one of the two buttons, you’ll see a list of generalized behaviours of those people who use the two functions selected. In each couple, the extraverted one is easier to notice in the outer world; also, one is usually more developed than the other, so try not to obsess too much over getting a perfect match (:</div>
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

  renderFunctionButton: function(elem, i) {
    return (
      <Tappable
        onTap={ this.handleButtonClick.bind(this, elem.extraverted) }
        classBase="functions__tile-"
        pressDelay={ 0 }
        key={ i }
        className="functions__tile"
      >
        { elem.buttonLabel }
        <span className="functions__tile__read">
          read more
        </span>
      </Tappable>
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
              <div
                className="modal__content__title"
                dangerouslySetInnerHTML={{__html: rightObject.modalTitleEx.replace(" ", "<br/>") }}
              />
              <div
                className="modal__content__text"
                >
                <ul className='modal__content__text__ul'>
                  { rightObject.modalDescriptionEx.map(function(listItem) {
                      return <li key={ listItem }>{ listItem }</li>;
                    }) }
                </ul>
              </div>
              <div
                className="modal__content__title"
                dangerouslySetInnerHTML={{__html: rightObject.modalTitleIn.replace(" ", "<br/>") }}
              />
              <div
                className="modal__content__text"
                >
                <ul className='modal__content__text__ul'>
                  { rightObject.modalDescriptionIn.map(function(listItem) {
                      return <li key={ listItem }>{ listItem }</li>;
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

module.exports = Functions;
