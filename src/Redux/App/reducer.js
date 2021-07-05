/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} login state
 * @param  {action} login action
 */
import { createReducer, updateObject } from '../../Helpers';
import {
  GET_ME_REQUEST, GET_ME_SUCCESS, GET_ME_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
} from './constants';

export const initialState = {
  isGetMeRequesting: false,
  isGetMeSuccess: false,
  isGetMeFailure: false,

  isLogoutRequesting: false,
  isLogoutSuccess: false,
  isLogoutFailure: false,

  authenticated: null,
  currentUser: null,
  error: null,
};

function getMeRequest(state) {
  return updateObject(state, {
    isGetMeRequesting: true,
  });
}

function getMeSuccess(state, { currentUser }) {
  return updateObject(state, {
    currentUser,
    authenticated: true,
    isGetMeRequesting: false,
    isGetMeSuccess: true,
  });
}

function getMeFailure(state, { error }) {
  return updateObject(state, {
    error,
    authenticated: false,
    isGetMeRequesting: false,
    isGetMeFailure: true,
  });
}

function logoutRequest(state) {
  return updateObject(state, {
    isLogoutRequesting: true,
  });
}

function logoutSuccess(state) {
  return updateObject(state, {
    currentUser: null,
    authenticated: false,
    isLogoutRequesting: false,
    isLogoutSuccess: true,
  });
}

function logoutFailure(state, { error }) {
  return updateObject(state, {
    error,
    isLogoutRequesting: false,
    isLogoutFailure: true,
  });
}

// Slice reducer
export default createReducer(initialState, {
  [GET_ME_REQUEST]: getMeRequest,
  [GET_ME_SUCCESS]: getMeSuccess,
  [GET_ME_FAILURE]: getMeFailure,

  [LOG_OUT_REQUEST]: logoutRequest,
  [LOG_OUT_SUCCESS]: logoutSuccess,
  [LOG_OUT_FAILURE]: logoutFailure,
});
