/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

const makeSelectAuthenticatedStatus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.authenticated,
);

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.currentUser,
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading,
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error,
);

export {
  selectGlobal,
  selectRouter,
  makeSelectAuthenticatedStatus,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
};
