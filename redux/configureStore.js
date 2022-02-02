import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/SearchReducer';


const rootReducer = combineReducers({
  Search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
