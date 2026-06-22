import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import counterReducer from './counterReducer';
import servicesReducer from './servicesReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  services: servicesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

