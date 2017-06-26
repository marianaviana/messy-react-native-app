import {
  CHECKIN_SUCCESS,
  CHECKIN_FAILURE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECKIN_SUCCESS:
      return { ...state, created: true, message: 'Checkin criado com sucesso.' };
    case CHECKIN_FAILURE:
      return { ...state, created: false, error: 'Erro ao criar checkin.' };
    default:
      return state;
  }
};
