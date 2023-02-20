import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk/es/types';
import { RootState } from '../reducer';
import axios from "axios";

export interface IUsersData{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const USER_REQUEST = 'USER_REQUEST';
export type UserRequestAction = {
  type: typeof USER_REQUEST
}
export const userRequest: ActionCreator<UserRequestAction> = () => ({
  type: USER_REQUEST,
});


export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export type UserRequestSuccessAction = {
  type: typeof USER_REQUEST_SUCCESS;
  data: IUsersData[];
}
export const userRequestSuccess: ActionCreator<UserRequestSuccessAction> = (data: IUsersData[]) => ({
  type: USER_REQUEST_SUCCESS,
  data,
});


export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';
export type UserRequestErrorAction = {
  type: typeof USER_REQUEST_ERROR;
  error: string;
}
export const userRequestError: ActionCreator<UserRequestErrorAction> = (error: string) => ({
  type: USER_REQUEST_ERROR,
  error,
});

export const userRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(userRequest());
  axios.get('https://reqres.in/api/users', {
      params: {
        page: 1,
      }
    }
  )
  .then((resp) => {
    const userData = resp.data.data;
    dispatch(userRequestSuccess(userData));
  })
  .catch((error) => {
    console.log(error);
    dispatch(userRequestError(String(error)));
  });
  dispatch(userRequest());
  axios.get('https://reqres.in/api/users', {
      params: {
        page: 2,
      }
    }
  )
  .then((resp) => {
    const userData = resp.data.data;
    dispatch(userRequestSuccess(userData));
  })
  .catch((error) => {
    console.log(error);
    dispatch(userRequestError(String(error)));
  });
}
