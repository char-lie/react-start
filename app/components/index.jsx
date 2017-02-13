import React from 'react'
import {connect} from 'react-redux'

import ButtonBlock from './ButtonBlock'
import HelloMessage from './HelloMessage'

import {makeText} from '../actions/makeHello'

class Application extends React.Component {
    constructor(props) {
        super(props)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    render() {
        return (
            <div>
                <HelloMessage text={this.props.text}/>
                <ButtonBlock onClick={this.onButtonClick}/>
            </div>
        )
    }
    onButtonClick(text) {
        this.props.dispatch(makeText(text))
    }
}

export default connect((state) => ({text: state.changeText.text}))(Application)
