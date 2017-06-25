import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GymCardReducer from './GymCardReducer';
import AssessmentReducer from './AssessmentReducer';

export default combineReducers({
  auth: AuthReducer,
  gymcards: GymCardReducer,
  assessments: AssessmentReducer
});
