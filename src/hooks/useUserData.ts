import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store/reducer";
import { IUsersData, userRequestAsync } from "../shared/store/users/action";


export function useUserData() {
  const data = useSelector<RootState, IUsersData[]>(state => state.user.data);
  const loading = useSelector<RootState, boolean>(state => state.user.loading);
  const error = useSelector<RootState, string>(state => state.user.error);
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  useEffect(() => {

    if (token && token !== 'undefined'){
      dispatch(userRequestAsync());
    }

  }, [token]);

  return {
    data,
    loading,
    error
  };
}
