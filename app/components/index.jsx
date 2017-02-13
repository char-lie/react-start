import React from 'react'
import {connect} from 'react-redux'

import ButtonBlock from './ButtonBlock'
import HelloMessage from './HelloMessage'
import TextInput from './TextInput'

import {makeText} from '../actions/makeHello'

class Application extends React.Component {
    constructor(props) {
        super(props)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.onAdvancedButtonClick = this.onAdvancedButtonClick.bind(this)
    }

    render() {
        return (
            <div>
                <HelloMessage text={this.props.text}/>
                <ButtonBlock onClick={this.onButtonClick} onExternalClick={this.onAdvancedButtonClick}/>
                <TextInput ref="myTextInput"/>
            </div>
        )
    }
    onButtonClick(text) {
        this.props.dispatch(makeText(text))
    }
    onAdvancedButtonClick() {
        this.props.dispatch(makeText(this.refs.myTextInput.getInputValue()))
    }
}

export default connect((state) => ({text: state.changeText.text}))(Application)
