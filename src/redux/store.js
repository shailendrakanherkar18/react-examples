import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import rootReducer from './rootReducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(
  rootReducer,
  undefined,
  bindMiddleware([thunk])
);

export default store;
