import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
// Import root reducer
import rootReducer from './reducers';
//import { middleware } from 'yargs';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
   applyMiddleware(...middleware)
  )
);

export default store;