import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
  User: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
