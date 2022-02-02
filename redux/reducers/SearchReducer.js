import { SET_SEARCH_RESULTS } from '../Actions';
const initialState = {
  results: null
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
export default SearchReducer;
