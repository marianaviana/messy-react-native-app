import axios from 'axios';
import {
  ASSESSMENTS_FETCH_SUCCESS,
  URL
} from './types';


export const AssessmentsFetch = () => {
  return (dispatch, getState) => {
    axios.get(`${URL}/api/assessments.json?user_email=${getState().auth.user.email}&user_token=${getState().auth.user.auth_token}`)
      .then(response => {
          dispatch({
          type: ASSESSMENTS_FETCH_SUCCESS,
          payload: response.data.assessments
        });
      }).catch((error) => console.log(error));
  };
};
