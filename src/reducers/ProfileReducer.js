import {
  PROFILE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};