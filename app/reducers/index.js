import { combineReducers } from 'redux';

import changeText from './changeText';
import populateTable from './populateTable';

export default combineReducers({ changeText, populateTable });
