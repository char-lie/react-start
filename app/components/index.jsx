import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ButtonBlock from './ButtonBlock';
import HelloMessage from './HelloMessage';
import TextInput from './TextInput';
import TableGrid from './TableGrid';

import { makeText } from '../actions/makeHello';
import { fetchTableData } from '../actions/fetchTableData';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onAdvancedButtonClick = this.onAdvancedButtonClick.bind(this);
    this.saveInputReference = this.saveInputReference.bind(this);
    this.onChangeTable = this.onChangeTable.bind(this);
  }
  onButtonClick(text) {
    this.props.dispatch(makeText(text));
  }
  onAdvancedButtonClick() {
    this.props.dispatch(makeText(this.textInput.getInputValue()));
  }
  onChangeTable() {
    this.props.dispatch(fetchTableData());
  }
  saveInputReference(input) {
    this.textInput = input;
  }
  render() {
    return (
      <div>
        <HelloMessage text={this.props.text} />
        <ButtonBlock
          onClick={this.onButtonClick}
          onExternalClick={this.onAdvancedButtonClick}
          onChangeTable={this.onChangeTable}
        />
        <TextInput ref={this.saveInputReference} />
        <TableGrid items={this.props.items} />
      </div>
    );
  }
}

Application.propTypes = {
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.number),
};

Application.defaultProps = {
  text: '',
  items: [],
};

export default connect(state => ({
  text: state.changeText.text,
  items: state.populateTable.data,
}))(Application);
