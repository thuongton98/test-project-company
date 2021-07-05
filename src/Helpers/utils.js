/* eslint-disable import/prefer-default-export */
import { reduce } from 'lodash';

export const decodePath = (path) => {
  const arr = path.split('/');
  arr.shift();
  return arr;
};

export const json2Form = (jsonObj) => reduce(
  jsonObj,
  (result, item, key) => {
    result.append(key, item);
    return result;
  }, new FormData(),
);
