import AxiosClient from '../Helpers/axios';
import { RESOURCES, PREFIX } from '../Constants';

function signInAPI(data) {
  return AxiosClient.post(PREFIX.AUTH + RESOURCES.SIGN_IN, data);
}

export default {
  signInAPI,
};
