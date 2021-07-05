/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './Helpers/history';

import './Theme/default/style.scss';
import App from './App/App';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import configureStore from './Redux/configureStore';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  process.env.NODE_ENV !== 'production'
    ? (
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    )
    : (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ConnectedRouter>
      </Provider>
    ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// firebase messaging register
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//     .then((registration) => {
//       console.log('Registration successful, scope is:', registration.scope);
//     }).catch((err) => {
//       console.log('Service worker registration failed, error:', err);
//     });
// }
