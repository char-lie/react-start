import React from 'react';
import {render} from 'react-dom';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello world 2 + 2 = {2+2}</div>;
    }
}

render(<HelloMessage/>, document.getElementById('app'));
