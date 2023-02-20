import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateEmail, updateName, updatePassword, updateRepeatPassword } from '../../store/reducer';
import { InputBlock } from '../InputBlock';
import styles from './formfieldset.css';


export function FormFieldset() {

  const name = useSelector<RootState, string>(state => state.name);
  const email = useSelector<RootState, string>(state => state.email);
  const password = useSelector<RootState, string>(state => state.password);
  const repeatPassword = useSelector<RootState, string>(state => state.repeatPassword);

  const nameError = useSelector<RootState, string>(state => state.validation.name);
  const emailError = useSelector<RootState, string>(state => state.validation.email);
  const passwordError = useSelector<RootState, string>(state => state.validation.password);
  const repeatPasswordError = useSelector<RootState, string>(state => state.validation.repeatPassword);

  const dispatch = useDispatch();

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateName(event.target.value))
  };

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateEmail(event.target.value))
  };

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updatePassword(event.target.value))
  };

  function handleChangeRepeatPassword(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateRepeatPassword(event.target.value))
  };

  return (
    <fieldset className={styles.fieldset}>
      <InputBlock label={'Имя'} value={name} onChange={handleChangeName} error={nameError} type={'text'}/>
      <InputBlock label={'Электронная почта'} value={email} onChange={handleChangeEmail} error={emailError} type={'email'}/>
      <InputBlock label={'Пароль'} value={password} onChange={handleChangePassword} error={passwordError} type={'password'}/>
      <InputBlock label={'Подтвердите пароль'} value={repeatPassword} onChange={handleChangeRepeatPassword} error={repeatPasswordError} type={'password'}/>
    </fieldset>
  );
}
