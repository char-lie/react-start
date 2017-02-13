import React, { PropTypes } from 'react';

const HelloMessage = ({ text }) => (
  <div>{text}</div>
);

HelloMessage.propTypes = {
  text: PropTypes.string,
};

HelloMessage.defaultProps = {
  text: '',
};

export default HelloMessage;
