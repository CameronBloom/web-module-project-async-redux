import { FETCH_DOGS_START, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAIL } from '../actions/index.js';

const initialState = {
    dogs: [],
    note: "Inactive",
    isFetching: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOGS_START:
          return {
            ...state,
            note: "Start!!!",
            isFetching: true,
          };
        case FETCH_DOGS_SUCCESS:
          return {
            ...state,
            dogs: action.payload,
            note: "Success!!!",
            isFetching: false,
          };
        case FETCH_DOGS_FAIL:
          return {
            ...state,
            note: "Failure!!!",
            isFetching: false,
          };
        default:
          return state;
    }
}

export default reducer;