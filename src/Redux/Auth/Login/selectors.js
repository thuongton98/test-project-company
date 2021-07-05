/**
 * Login state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginScreen = (state) => state.loginScreen || initialState;

const makeSelectLoginStatus = () => createSelector(
  selectLoginScreen,
  (loginScreenState) => loginScreenState.isSignInSuccess,
);

const makeSelectLoading = () => createSelector(
  selectLoginScreen,
  (loginScreenState) => loginScreenState.isSignInRequesting,
);

const makeSelectError = () => createSelector(
  selectLoginScreen,
  (loginScreenState) => loginScreenState.error,
);

const makeSelectMessage = () => createSelector(
  selectLoginScreen,
  (loginScreenState) => loginScreenState.message,
);

export {
  selectLoginScreen,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectLoginStatus,
};
