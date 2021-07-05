export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const PREFIX = {
  AUTH: '/auth',
  V1: '/v1',
};

export const RESOURCES = {
  SIGN_IN: '/login',
  SIGN_UP: '/register',

  GET_ME: '/me',
  LOG_OUT: '/logout',
};

export const BREADCRUMB = {};

export const DATA_NOT_FOUND = '何もデータが見つかりませんでした';
