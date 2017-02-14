import React, { PropTypes } from 'react';

class TableGrid extends React.Component {
  renderItems() {
    return this.props.items.map((item, key) => (
      <tr key={`tr_${key + 1}`}>
        <td>{key}</td>
        <td>{item}</td>
      </tr>
    ));
  }
  render() {
    return (
      <table>
        <thead><tr><th>Number</th><th>Data</th></tr></thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

TableGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number),
};

TableGrid.defaultProps = {
  items: [],
};

export default TableGrid;
