import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import DOMStructure from './components/index'
import reducers from './reducers'

const store = createStore(reducers)

render((
    <Provider store={store}>
        <DOMStructure/>
    </Provider>
), document.getElementById('app'))
