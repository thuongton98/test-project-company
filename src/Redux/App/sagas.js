/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import {
  getMeSuccess, getMeFailure,
  logoutSuccess, logoutFailure,
} from './actions';

import {
  ApplicationService,
} from '../../Services';
import {
  GET_ME_REQUEST, LOG_OUT_REQUEST,
} from './constants';

/**
 * Get user info request/response handler
 */
export function* getMe() {
  try {
    // Call our request helper (see 'Helpers/axios')
    const { data } = yield call(ApplicationService.getMeAPI);

    yield put(getMeSuccess(data));
  } catch (err) {
    yield put(getMeFailure(err));
  }
}

export function* logout() {
  try {
    // Call our request helper (see 'Helpers/axios')
    const { status } = yield call(ApplicationService.logoutAPI);
    if (status) {
      localStorage.removeItem('userToken');
      yield put(logoutSuccess());
    }
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appSaga() {
  // Watches for appSaga actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_ME_REQUEST, getMe);
  yield takeLatest(LOG_OUT_REQUEST, logout);
}
