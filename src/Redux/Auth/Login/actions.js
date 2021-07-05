/*
 * Login Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
} from './constants';

/**
 * Request sign in, this action starts the request saga
 *
 * @return {object} An action object with a type of SIGN_IN_REQUEST
 */
export function signInRequest(payload) {
  return {
    type: SIGN_IN_REQUEST,
    payload,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {string} currentUser The current user info
 *
 * @return {object}      An action object with a type of SIGN_IN_SUCCESS passing the repos
 */
export function signInSuccess(message) {
  return {
    type: SIGN_IN_SUCCESS,
    message,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SIGN_IN_FAILURE passing the error
 */
export function signInFailure(error) {
  return {
    type: SIGN_IN_FAILURE,
    error,
  };
}