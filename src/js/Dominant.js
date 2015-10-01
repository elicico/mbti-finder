var React = require('react');
var PropTypes = React.PropTypes;

var DATA = [
  {
    dominant: "Ne",
    domTitle: "Dominant Ne",
    domDescription: (<ul>
      <li>Comfortable inattention to sensorial data</li>
      <li>Flexibility, adaptability, risk taking</li>
      <li>Optimism about future possibilities</li>
    </ul>),
    infTitle: "Inferior Si",
    infDescription: (<ul>
      <li>Withdrawal and depression</li>
      <li>Obsessiveness</li>
      <li>Excessive and distorted focus on the body</li>
    </ul>)
  },
  {
    dominant: "Se",
    domTitle: "Dominant Se",
    domDescription: (<ul>
      <li>Focus on external data</li>
      <li>Seeking sensual/aesthetic pleasure</li>
      <li>Delight in the outer world</li>
    </ul>),
    infTitle: "Inferior Ni",
    infDescription: (<ul>
      <li>Internal confusion</li>
      <li>Inappropriate attribution of meaning to everyday matters</li>
      <li>Grandiose/mystical vision of life, future, or universe</li>
    </ul>)
  },
  {
    dominant: "Te",
    domTitle: "Dominant Te",
    domDescription: (<ul>
      <li>Competence</li>
      <li>Constant search for truth and accuracy</li>
      <li>Decisive action</li>
    </ul>),
    infTitle: "Inferior Fi",
    infDescription: (<ul>
      <li>Hypersensitivity to inner emotional states</li>
      <li>Outbursts of emotion</li>
      <li>Generalized fear of feeling</li>
    </ul>)
  },
  {
    dominant: "Fe",
    domTitle: "Dominant Fe",
    domDescription: (<ul>
      <li>Comfortable inattention to logic</li>
      <li>Sensitivity to others welfare</li>
      <li>Sharing of emotions</li>
    </ul>),
    infTitle: "Inferior Ti",
    infDescription: (<ul>
      <li>Excessive criticism</li>
      <li>Convoluted logic in thinking or interpreting matters</li>
      <li>Compulsive search for truth</li>
    </ul>)
  },
  {
    dominant: "Ni",
    domTitle: "Dominant Ni",
    domDescription: (<ul>
      <li>Intellectual clarity</li>
      <li>Accurate interpretation of perceptions received</li>
      <li>Visionary insights on various topics, people and things</li>
    </ul>),
    infTitle: "Inferior Se",
    infDescription: (<ul>
      <li>Obsessive focus on external data</li>
      <li>Overindulgence in sensual pleasures</li>
      <li>Adversarial attitude toward the outer world</li>
    </ul>)
  },
  {
    dominant: "Si",
    domTitle: "Dominant Si",
    domDescription: (<ul>
      <li>Natural attitude to seek solitude and reflection</li>
      <li>Attention to facts and details</li>
      <li>Constant awareness of internal experience of the present, compared and linked to past memories, data and experiences</li>
    </ul>),
    infTitle: "Inferior Ne",
    infDescription: (<ul>
      <li>Loss of control over facts and details</li>
      <li>Impulsiveness</li>
      <li>Tendency to irrationally catastrophize over matters</li>
    </ul>)
  },
  {
    dominant: "Ti",
    domTitle: "Dominant Ti",
    domDescription: (<ul>
      <li>Impersonal criticism over matters</li>
      <li>Logical internal analysis of every subject of interest</li>
      <li>Search for accuracy and truth</li>
    </ul>),
    infTitle: "Inferior Fe",
    infDescription: (<ul>
      <li>Use of logical thinking irrationally emphasized to an extreme</li>
      <li>Hypersensitivity to relationships</li>
      <li>Uncontrolled emotionalism</li>
    </ul>)
  },
  {
    dominant: "Fi",
    domTitle: "Dominant Fi",
    domDescription: (<ul>
      <li>Inner emotional harmony</li>
      <li>Economy of emotional expression in the outer world</li>
      <li>Acceptance of feelings as non-logical</li>
    </ul>),
    infTitle: "Inferior Te",
    infDescription: (<ul>
      <li>Irrational judgments of incompetence in self and people</li>
      <li>Aggressive criticism</li>
      <li>Precipitous action taking in matters where strong feelings are involved</li>
    </ul>)
  }
];

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
        <div className="modal__content__text">Which couple is the right one? <br/>Well, when trying to define someone’s MBTI type, you should first look at the extroverted functions. <br/>They are more expressed in the outer world than the introverted ones, thus easier to notice. <br/>Also, in the couple extroverted/introverted, one is always more developed than the other. So if you think you have recognized many aspects of one of the two functions of a couple but can’t well identify the characteristics of the other one, it may be because it is a dominant/inferior couple. <br/>But don’t worry, we will get there later (:</div>
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

  render: function() {
    var functions = [ this.props.exFunctions[0], this.props.exFunctions[1], this.state.inPerceiving, this.state.inJudging ];

    return (
      <div className="container-absolute">
        <div className="functions">
          <div className="functions__label">
            Which function is the dominant one?
          </div>
          { functions.map(this.renderFunctionButton) }
        </div>
      </div>
    );
  },

  renderFunctionButton: function(cognfunc) {
    return (
      <div>BOTTONE { cognfunc }</div>
    );
  }

});

module.exports = Dominant;
