import React, { PropTypes } from 'react';

class TableGrid extends React.Component {
  renderItems() {
    return this.props.items.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.value}</td>
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
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

TableGrid.defaultProps = {
  items: [],
};

export default TableGrid;
