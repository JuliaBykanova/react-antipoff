import { Reducer } from "react";
import { IUsersData, UserRequestAction, UserRequestErrorAction, UserRequestSuccessAction, USER_REQUEST, USER_REQUEST_ERROR, USER_REQUEST_SUCCESS } from "./action";

export type UserState = {
  loading: boolean;
  error: string;
  data: IUsersData[];
}

type UserActions = UserRequestAction
|UserRequestSuccessAction
|UserRequestErrorAction;

export const userReducer: Reducer<UserState, UserActions> = (state, action) => {
  switch(action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        data: state.data.concat(...action.data),
        loading: false
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
