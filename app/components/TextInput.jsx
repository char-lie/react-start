import React from 'react';

class TextInput extends React.Component {
  getInputValue() {
    return this.textValue.value;
  }
  render() {
    return (
      <input type="text" defaultValue="Type something" ref={(c) => { this.textValue = c; }} />
    );
  }
}

export default TextInput;
