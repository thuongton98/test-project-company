/* eslint-disable import/prefer-default-export */
import { map } from 'lodash';
import { BREADCRUMB } from '../Constants';

export const getBreadcrumbs = (pathArr) => map(
  pathArr, (item) => ({ route: item, text: BREADCRUMB[item] }),
);
