import { Actions } from '../actions/makeHello';

const initialState = {
  text: 'Hello',
};

function changeText(state = initialState, action) {
  switch (action.type) {
    case Actions.MAKE_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
      });
    default:
      return state;
  }
}

export default changeText;
