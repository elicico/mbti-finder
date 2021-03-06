var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Tappable = require('react-tappable');
var PropTypes = React.PropTypes;
var Portal = require('./Portal');

var Modal = React.createClass({
  handleClose: function(e) {
    e.preventDefault();
    this.props.onClose();
  },

  render: function() {
    return (
      <Portal>
        <ReactCSSTransitionGroup transitionName="transition-fade">
          { this.props.isOpen &&
            <div key="modal" className="modal">
              <Tappable
                onTap={ this.handleModalClose }
                classBase="modal__close-button-"
                pressDelay={ 0 }
                className="modal__close-button"
                onClick={ this.handleClose }
              >
                <img className="modal__close-mark" src="/imgs/close.svg"/>
              </Tappable>
              <div className="modal__content">
                { this.props.children }
              </div>
            </div>
          }
        </ReactCSSTransitionGroup>
      </Portal>
    );
  }

});

module.exports = Modal;
