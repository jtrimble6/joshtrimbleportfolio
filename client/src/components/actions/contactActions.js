import { post } from '../utils/http-util';
import { getAppUrl } from '../utils/environment-util';
import { handleError } from '../utils/error-util';

const AUTH_ENDPOINT_BASE = '/contacts';
const SEND_MAIL = 'SEND_MAIL';

export const sendMail = (message) => async (dispatch) => {
  try {
    const response = await post(dispatch, SEND_MAIL, `${AUTH_ENDPOINT_BASE}`, message, false);

  } catch (err) {
    await handleError(dispatch, err, SEND_MAIL);
  }
};