import React from 'react';

class HelloMessage extends React.Component {
    render() {
        return <div>{this.props.text}</div>;
    }
}

export default HelloMessage
