import { SET_SEARCH_RESULTS } from './Actions'


export const setSearchResults = payload => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: payload,
  };
}

