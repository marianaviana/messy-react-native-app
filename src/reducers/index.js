import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GymCardReducer from './GymCardReducer';

export default combineReducers({
  auth: AuthReducer,
  gymcards: GymCardReducer
});
