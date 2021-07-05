/*
 * App Actions
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
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  GET_ME_FAILURE,

  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from './constants';

/**
 * Request get me, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_ME_REQUEST
 */
export function getMeRequest() {
  return {
    type: GET_ME_REQUEST,
  };
}

export function getMeSuccess(currentUser) {
  return {
    type: GET_ME_SUCCESS,
    currentUser,
  };
}

export function getMeFailure() {
  return {
    type: GET_ME_FAILURE,
  };
}

/**
 * Request log out, this action starts the request saga
 *
 * @return {object} An action object with a type of LOG_OUT_REQUEST
 */
export function logoutRequest() {
  return {
    type: LOG_OUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: LOG_OUT_SUCCESS,
  };
}

export function logoutFailure() {
  return {
    type: LOG_OUT_FAILURE,
  };
}
