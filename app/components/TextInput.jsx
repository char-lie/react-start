import React from 'react'

class TextInput extends React.Component {
    render() {
        return (
            <input type="text" defaultValue="Type something" ref="myTextField" />
        )
    }
    getInputValue() {
        return this.refs.myTextField.value
    }
}

export default TextInput
