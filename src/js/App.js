var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Navbar = require("./Navbar");
var Modal = require("./Modal");
var Splash = require("./Splash");
var Functions = require("./Functions");
var Dominant = require("./Dominant");
var Result = require("./Result");
var PropTypes = React.PropTypes;

var TITLES = {
  "perc": "Perceivings",
  "judg": "Judgings",
  "dom": "Dominant",
  "res": "Result"
};

var KEY_TO_RESET = {
  "perc": "splashDismissed",
  "judg": "exPerceiving",
  "dom": "exJudging",
  "res": "dominant"
};

var App = React.createClass({
  getInitialState: function() {
    return {
      splashDismissed: false,
      exPerceiving: null,
      exJudging: null,
      dominant: null,
      modalIsOpen: false,
      modalContent: null
    };
  },

  calculateStep: function() {
    if (!this.state.splashDismissed) {
      return "spl";
    } else if (!this.state.exPerceiving) {
      return "perc";
    } else if (!this.state.exJudging) {
      return "judg";
    } else if (!this.state.dominant) {
      return "dom";
    } else {
      return "res";
    }
  },

  setModalContent: function(content) {
    this.setState({
      modalContent: content
    });
  },

  handlePageChange: function(key, value) {
    var toChange = { transition: "transition-push" };
    toChange[key] = value;
    this.setState(toChange);
  },

  handlePageBack: function() {
    var key = KEY_TO_RESET[this.calculateStep()];
    var toBack = { transition: "transition-pop" };
    toBack[key] = null;
    this.setState(toBack);
  },

  handlePageHelp: function() {
    this.setState({
      modalIsOpen: true
    });
  },

  handleModalClose: function() {
    this.setState({
      modalIsOpen: false
    });
  },

  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="transition-slide">
          { this.renderNavbar() }
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="transition-push">
          { this.renderPages() }
        </ReactCSSTransitionGroup>
          { this.renderModal() }
      </div>
    );
  },

  renderPages: function() {
    switch (this.calculateStep()) {
      case "spl":
        return <Splash key="splash"
                  onContinue={ this.handlePageChange.bind(this, "splashDismissed", true) }
                />;
      case "perc":
        return <Functions
                  key="perceivings"
                  isJudging= {false}
                  setModalContent={ this.setModalContent }
                  onSelect={ this.handlePageChange.bind(this, "exPerceiving") }
                />;
      case "judg":
        return <Functions
                  key="judgings"
                  isJudging= {true}
                  setModalContent={ this.setModalContent }
                  onSelect={ this.handlePageChange.bind(this, "exJudging") }
                />;
      case "dom":
        return <Dominant
                  key="dominant"
                  exFunctions={ [this.state.exPerceiving, this.state.exJudging] }
                  setModalContent={ this.setModalContent }
                  onSelect={ this.handlePageChange.bind(this, "dominant") }
                />;
      case "res":
        return <Result
                  key="result"
                  exFunctions={ [this.state.exPerceiving, this.state.exJudging] }
                  domFunction={ this.state.dominant }
                  setModalContent={ this.setModalContent }
                />;
    }
  },

  renderNavbar: function() {
    if (this.state.splashDismissed) {
      return (
        <Navbar
          key="navbar"
          onPageBack={ this.handlePageBack }
          onPageHelp={ this.handlePageHelp }
          isHelpVisible={ this.calculateStep() !== "res" }
          title={ TITLES[this.calculateStep()] }
        />
      );
    }
  },

  renderModal: function() {
    return (
      <Modal
        isOpen={ this.state.modalIsOpen }
        onClose={ this.handleModalClose }
      >
        { this.state.modalContent }
      </Modal>
    );
  },

  propTypes: {
    transitionName: PropTypes.string
  }

});

module.exports = App;
