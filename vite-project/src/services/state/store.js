import { combineReducers, legacy_createStore } from 'redux';
import reducer from './reducers/plants.reducers.js';
import shopReducer from './reducers/shopList.reducers.js';
import { composeWithDevTools } from '@redux-devtools/extension';
const reducers=combineReducers({shopReducer, reducer})
const store = legacy_createStore(reducers , composeWithDevTools());

export default store;
