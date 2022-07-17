import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import './styles/styles.scss';
import { studentsReducer } from './reducers/students';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(studentsReducer);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);


