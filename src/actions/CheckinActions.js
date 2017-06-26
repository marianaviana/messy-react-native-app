import axios from 'axios';
import {
  CHECKIN_SUCCESS,
  CHECKIN_FAILURE,
  URL
} from './types';

export const Checkin = () => {
  return (dispatch, getState) => {
    axios.post(`${URL}/api/clients/${getState().auth.user.id}/check_ins.json
      ?user_email=${getState().auth.user.email}&user_token=${getState().auth.user.auth_token}`,
        { client_id: getState().auth.user.id })
      .then(response => {
        if (response.data.success) {
          dispatch({
          type: CHECKIN_SUCCESS,
          payload: response.data.checkin
        });
      } else {
        CheckinFail(dispatch);
      }
      }).catch(() => CheckinFail(dispatch));
  };
};

const CheckinFail = (dispatch) => {
  dispatch({ type: CHECKIN_FAILURE });
};
