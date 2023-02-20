import { Reducer } from "react";
import { RegistrationRequestAction, RegistrationRequestErrorAction, RegistrationRequestSuccessAction, REGISTRATION_REQUEST, REGISTRATION_REQUEST_ERROR, REGISTRATION_REQUEST_SUCCESS } from "./action";


export type RegistrationState = {
  loading: boolean;
  error: string;
  token: string;
}

type RegistrationActions = RegistrationRequestAction
|RegistrationRequestSuccessAction
|RegistrationRequestErrorAction;

export const registrationReducer: Reducer<RegistrationState, RegistrationActions> = (state, action) => {
  switch(action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false
      };
    case REGISTRATION_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
