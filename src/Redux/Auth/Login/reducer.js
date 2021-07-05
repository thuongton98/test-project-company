/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} current state
 * @param  {action} payload
 */
import { LOCATION_CHANGE } from 'connected-react-router';
import { createReducer, updateObject } from '../../../Helpers';
import {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
} from './constants';

export const initialState = {
  isSignInRequesting: false,
  isSignInSuccess: false,
  isSignInFailure: false,

  error: null,
  message: null,
};

// signIn Request
function signInRequest(state) {
  return updateObject(state, {
    error: null,
    message: null,
    isSignInRequesting: true,
  });
}

// signIn Success
function signInSuccess(state, { message }) {
  return updateObject(state, {
    isSignInRequesting: false,
    isSignInSuccess: true,
    message,
  });
}

// signIn Failure
function signInFailure(state, { error }) {
  return updateObject(state, {
    error,
    isSignInRequesting: false,
    isSignInFailure: true,
  });
}

function resetState(state) {
  return updateObject(state, initialState);
}

// Slice reducer
export default createReducer(initialState, {
  [SIGN_IN_REQUEST]: signInRequest,
  [SIGN_IN_SUCCESS]: signInSuccess,
  [SIGN_IN_FAILURE]: signInFailure,

  [LOCATION_CHANGE]: resetState,
});
