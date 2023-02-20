import { ActionCreator, Action, Reducer } from 'redux';
import { RegistrationRequestAction, RegistrationRequestErrorAction, RegistrationRequestSuccessAction, REGISTRATION_REQUEST, REGISTRATION_REQUEST_ERROR, REGISTRATION_REQUEST_SUCCESS } from './registration/action';
import { registrationReducer, RegistrationState } from './registration/reducer';
import { UserRequestAction, UserRequestErrorAction, UserRequestSuccessAction, USER_REQUEST, USER_REQUEST_ERROR, USER_REQUEST_SUCCESS } from './users/action';
import { userReducer, UserState } from './users/reducer';

export type ValidationState = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export type RootState = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  registration: RegistrationState;
  user: UserState;
  validation: ValidationState;
};

const initialState: RootState = {
  name: '',
  email: 'eve.holt@reqres.in',
  password: '',
  repeatPassword: '',
  registration: {
    loading: false,
    token: '',
    error: '',
  },
  user: {
    loading: false,
    data: [],
    error: '',
  },
  validation: {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  },
};


const UPDATE_NAME = 'UPDATE_NAME';
type UpdateNameAction = {
  type: typeof UPDATE_NAME;
  text: string;
}
export const updateName: ActionCreator<UpdateNameAction> = (text) => ({
  type: UPDATE_NAME,
  text,
});

const UPDATE_EMAIL = 'UPDATE_EMAIL';
type UpdateEmailAction = {
  type: typeof UPDATE_EMAIL;
  text: string;
}
export const updateEmail: ActionCreator<UpdateEmailAction> = (text) => ({
  type: UPDATE_EMAIL,
  text,
});

const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
type UpdatePasswordAction = {
  type: typeof UPDATE_PASSWORD;
  text: string;
}
export const updatePassword: ActionCreator<UpdatePasswordAction> = (text) => ({
  type: UPDATE_PASSWORD,
  text,
});

const UPDATE_REPEAT_PASSWORD = 'UPDATE_REPEAT_PASSWORD';
type UpdateRepeatPasswordAction = {
  type: typeof UPDATE_REPEAT_PASSWORD;
  text: string;
}
export const updateRepeatPassword: ActionCreator<UpdateRepeatPasswordAction> = (text) => ({
  type: UPDATE_REPEAT_PASSWORD,
  text,
});

const VALIDATION = 'VALIDATION';
type ValidationAction = {
  type: typeof VALIDATION;
  errors: ValidationState;
}
export const validation: ActionCreator<ValidationAction> = (errors: ValidationState) => ({
  type: VALIDATION,
  errors,
});


type MyAction = UpdateNameAction
  |UpdateEmailAction
  |UpdatePasswordAction
  |UpdateRepeatPasswordAction
  |UserRequestAction
  |UserRequestSuccessAction
  |UserRequestErrorAction
  |RegistrationRequestAction
  |RegistrationRequestSuccessAction
  |RegistrationRequestErrorAction
  |ValidationAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return{
        ...state,
        name: action.text
      };
    case UPDATE_EMAIL:
      return{
        ...state,
        email: action.text
      };
    case UPDATE_PASSWORD:
      return{
        ...state,
        password: action.text
      };
    case UPDATE_REPEAT_PASSWORD:
      return{
        ...state,
        repeatPassword: action.text
      };
    case REGISTRATION_REQUEST:
    case REGISTRATION_REQUEST_SUCCESS:
    case REGISTRATION_REQUEST_ERROR:
      return {
        ...state,
        registration: registrationReducer(state.registration, action),
      };
    case USER_REQUEST:
    case USER_REQUEST_SUCCESS:
    case USER_REQUEST_ERROR:
      return {
        ...state,
        user: userReducer(state.user, action),
      };
    case VALIDATION:
      return{
        ...state,
        validation: action.errors
      };
    default:
      return state;
  };
};
