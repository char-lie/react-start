import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ButtonBlock from './ButtonBlock';
import HelloMessage from './HelloMessage';
import TextInput from './TextInput';

import { makeText } from '../actions/makeHello';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onAdvancedButtonClick = this.onAdvancedButtonClick.bind(this);
    this.saveInputReference = this.saveInputReference.bind(this);
  }
  onButtonClick(text) {
    this.props.dispatch(makeText(text));
  }
  onAdvancedButtonClick() {
    this.props.dispatch(makeText(this.textInput.getInputValue()));
  }
  saveInputReference(input) {
    this.textInput = input;
  }
  render() {
    return (
      <div>
        <HelloMessage text={this.props.text} />
        <ButtonBlock onClick={this.onButtonClick} onExternalClick={this.onAdvancedButtonClick} />
        <TextInput ref={this.saveInputReference} />
      </div>
    );
  }
}

Application.propTypes = {
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Application.defaultProps = {
  text: '',
};

export default connect(state => ({ text: state.changeText.text }))(Application);
