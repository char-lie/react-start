import React from 'react';
import {render} from 'react-dom';

import HelloButton from './HelloButton'
import HelloMessage from './HelloMessage'

render(<div><HelloMessage/><HelloButton/></div>, document.getElementById('app'));
