import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store/reducer";
import { registrationRequestAsync } from "../shared/store/registration/action";



export function useRegistrationData() {
  const token = useSelector<RootState, string>(state => state.registration.token);
  const loading = useSelector<RootState, boolean>(state => state.registration.loading);
  const error = useSelector<RootState, string>(state => state.registration.error);
  const emailValue = useSelector<RootState, string>(state => state.email);
  const passwordValue = useSelector<RootState, string>(state => state.password);


  const dispatch = useDispatch();

  const req = {
    email: emailValue,
    password: passwordValue,
  };

  dispatch(registrationRequestAsync(req));

  return {
    token,
    loading,
    error
  };
}
