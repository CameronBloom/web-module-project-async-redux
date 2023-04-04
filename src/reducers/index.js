import { ACTION_ONE, ACTION_TWO } from '../actions/index.js';

const initialState = {
    items: [],
    title: "Initial App Construction",
    note: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_ONE:
          return {
          ...state,
          note: "Action One!!!"
          };
        case ACTION_TWO:
          return {
            ...state,
            note: "Action Two!!!"
          };
        default:
          return state;
    }
}

export default reducer;