// /**
//  * Gets the repositories of the user from Github
//  */

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { SIGN_IN_REQUEST } from './constants';
import {
  signInSuccess, signInFailure,
} from './actions';
import { getMeRequest } from '../../App/actions';
import { LoginService } from '../../../Services';

/**
 * Signin system request/response handler
 */
export function* signIn({ payload }) {
  try {
    // Call our request helper (see 'Helpers/axios')
    const { token, message } = yield call(LoginService.signInAPI, payload);
    localStorage.setItem('userToken', token);

    yield put(signInSuccess(message));
    yield put(getMeRequest());
  } catch (err) {
    yield put(signInFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  // Watches for SIGN_IN_REQUEST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}
