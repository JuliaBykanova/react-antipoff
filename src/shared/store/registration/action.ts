import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk/es/types';
import { RootState } from '../reducer';
import axios from "axios";

interface IRequest{
  email: string,
  password: string,
}

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export type RegistrationRequestAction = {
  type: typeof REGISTRATION_REQUEST
}
export const registrationRequest: ActionCreator<RegistrationRequestAction> = () => ({
  type: REGISTRATION_REQUEST,
});


export const REGISTRATION_REQUEST_SUCCESS = 'REGISTRATION_REQUEST_SUCCESS';
export type RegistrationRequestSuccessAction = {
  type: typeof REGISTRATION_REQUEST_SUCCESS;
  token: string;
}
export const registrationRequestSuccess: ActionCreator<RegistrationRequestSuccessAction> = (token: string) => ({
  type: REGISTRATION_REQUEST_SUCCESS,
  token,
});


export const REGISTRATION_REQUEST_ERROR = 'REGISTRATION_REQUEST_ERROR';
export type RegistrationRequestErrorAction = {
  type: typeof REGISTRATION_REQUEST_ERROR;
  error: string;
}
export const registrationRequestError: ActionCreator<RegistrationRequestErrorAction> = (error: string) => ({
  type: REGISTRATION_REQUEST_ERROR,
  error,
});

export const registrationRequestAsync = (req: IRequest): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(registrationRequest());
  axios.post('https://reqres.in/api/register', req, {
      headers: { 'Content-Type': 'application/json' }
  })
  .then((resp) => {
    const token = resp.data.token;
    dispatch(registrationRequestSuccess(token));
    localStorage.setItem('token', token);
  })
  .catch((error) => {
    console.log(error);
    dispatch(registrationRequestError(String(error)));
  });
}
