import React, { PropTypes } from 'react';

const ButtonBlock = ({ onClick, onExternalClick, onChangeTable }) => (
  <div>
    <button className="custom-button" onClick={() => onClick('Text1')}>Set text1</button>
    <button onClick={() => onClick('Text2')}>Set text2</button>
    <button onClick={() => onExternalClick()}>Set text from input</button>
    <button onClick={() => onChangeTable()}>Get random numbers</button>
  </div>
);

ButtonBlock.propTypes = {
  onClick: PropTypes.func.isRequired,
  onExternalClick: PropTypes.func.isRequired,
  onChangeTable: PropTypes.func.isRequired,
};

export default ButtonBlock;
