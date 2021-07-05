/* eslint-disable no-unused-vars */
import AxiosClient from '../Helpers/axios';
import { RESOURCES, PREFIX } from '../Constants';

function getMeAPI() {
  return AxiosClient.get(PREFIX.V1 + RESOURCES.GET_ME);
}

function logoutAPI() {
  return AxiosClient.post(PREFIX.V1 + RESOURCES.LOG_OUT);
}

export default {
  getMeAPI,
  logoutAPI,
};
