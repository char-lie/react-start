import { Actions } from '../actions/fetchTableData';

const initialState = {
  data: [],
};

export default function populateTable(state = initialState, action) {
  switch (action.type) {
    case `${Actions.FETCH_TABLE_DATA}_FULFILLED`:
      return Object.assign({}, state, {
        data: action.payload,
      });
    default:
      return state;
  }
}
