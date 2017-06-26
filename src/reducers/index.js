import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GymCardReducer from './GymCardReducer';
import AssessmentReducer from './AssessmentReducer';
import ProfileReducer from './ProfileReducer';
import CheckinReducer from './CheckinReducer';

export default combineReducers({
  auth: AuthReducer,
  gymcards: GymCardReducer,
  assessments: AssessmentReducer,
  profile: ProfileReducer,
  checkin: CheckinReducer
});
