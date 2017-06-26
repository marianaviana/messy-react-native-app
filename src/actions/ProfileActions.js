import axios from 'axios';
import {
  PROFILE_FETCH_SUCCESS,
} from './types';


export const ProfileFetch = () => {
  return (dispatch, getState) => {
    axios.get(`http://gymapp-br.herokuapp.com/api/clients/${getState().auth.user.id}.json?user_email=${getState().auth.user.email}&user_token=${getState().auth.user.auth_token}`)
      .then(response => {
          dispatch({
          type: PROFILE_FETCH_SUCCESS,
          payload: response.data.client
        });
      }).catch((error) => console.log(error));
  };
};
