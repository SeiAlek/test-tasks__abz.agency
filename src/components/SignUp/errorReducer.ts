import { Action } from 'redux';

const ADD_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const REMOVE_ERROR_MESSAGE = 'REMOVE_ERROR_MESSAGE';

export const initialErrors = {
  name: '',
  email: '',
  phone: '',
  position: '',
  photo: '',
};

type AddError = Action<typeof ADD_ERROR_MESSAGE> & { name: string; message: string };
type RemoveError = Action<typeof REMOVE_ERROR_MESSAGE> & { name: string };
type AvailableActions = AddError | RemoveError;

export const addError = (name: string, message: string): AddError => ({
  type: ADD_ERROR_MESSAGE,
  name,
  message,
});

export const removeError = (name: string): RemoveError => ({
  type: REMOVE_ERROR_MESSAGE,
  name,
});

const errorReducer = (state = initialErrors, action: AvailableActions) => {
  switch (action.type) {
    case ADD_ERROR_MESSAGE:
      return {
        ...state,
        [action.name]: action.message,
      };

    case REMOVE_ERROR_MESSAGE:
      return {
        ...state,
        [action.name]: '',
      };

    default:
      return state;
  }
};

export default errorReducer;
