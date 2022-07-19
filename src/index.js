import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import './styles/styles.scss';
import { studentsReducer } from './reducers/students';
import thunk from 'redux-thunk';
import { logger } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(studentsReducer, composedEnhancers);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);


