/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_ME_REQUEST = '@PWA/APP/GET_ME_REQUEST';
export const GET_ME_SUCCESS = '@PWA/APP/GET_ME_SUCCESS';
export const GET_ME_FAILURE = '@PWA/APP/GET_ME_FAILURE';

export const LOG_OUT_REQUEST = '@PWA/APP/LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = '@PWA/APP/LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = '@PWA/APP/LOG_OUT_FAILURE';
