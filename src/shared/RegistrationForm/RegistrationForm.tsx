import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateEmail, updateName, updatePassword, updateRepeatPassword, validation, ValidationState } from '../store/reducer';
import styles from './registrationform.css';
import { useNavigate } from 'react-router-dom';
import { FormInput } from './FormInput';
import { FormBtn } from './FormBtn';
import { registrationRequestAsync } from '../store/registration/action';
import { InputBlock } from './InputBlock';
import { FormFieldset } from './FormFieldset';

export function RegistrationForm() {
  const navigate = useNavigate();

  const name = useSelector<RootState, string>(state => state.name);
  const email = useSelector<RootState, string>(state => state.email);
  const password = useSelector<RootState, string>(state => state.password);
  const repeatPassword = useSelector<RootState, string>(state => state.repeatPassword);

  const [isSumbited, setIsSubmited] = useState(false);

  const dispatch = useDispatch();

  function errorsInName() {
    let textErrorName = '';
    if (!name){
      textErrorName = 'Укажите имя';
    } else if (name.length < 2){
      textErrorName = 'Имя должно состоять минимум из 2-ух букв';
    } else if(/[^a-z]/i.test(name) && /[^а-я]/i.test(name)){
      textErrorName = 'Имя может сожержать только буквы';
    };
    return (textErrorName);
  };

  function errorsInEmail(){
    let textErrorEmail = '';
    if (!email){
      textErrorEmail = 'Укажите электронную почту';
    } else if(!validateEmail){
      textErrorEmail = 'Проверьте адрес электронной почты';
    };
    return(textErrorEmail);
  };

  function errorsInPassword(){
    let textErrorPassword = '';
    if (!password){
      textErrorPassword = 'Укажите пароль';
    } else if(password.length < 6) {
      textErrorPassword = 'Пароль не может содержать менее 6 символов';
    } else if(!validatePassword()){
      textErrorPassword = 'Пароль должен содержать, хотя бы одну строчную букву';
    };
    return(textErrorPassword);
  }

  function errorsInRepeatPassword(){
    let textErrorPassword = '';
    if (!repeatPassword){
      textErrorPassword = 'Повторите пароль';
    } else if(repeatPassword !== password) {
      textErrorPassword = 'Пароли должны совпадать';
    };
    return(textErrorPassword);
  }

  function validateEmail(){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function validatePassword(){
    return password.match(
      /^(?=.*[a-z]).{6,}$/
    );
  };


  const loading = useSelector<RootState, boolean>(state => state.registration.loading);
  const error = useSelector<RootState, string>(state => state.registration.error);
  const token = useSelector<RootState, string>(state => state.registration.token);

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    const validationErrors: ValidationState = {
      name: errorsInName(),
      email: errorsInEmail(),
      password: errorsInPassword(),
      repeatPassword: errorsInRepeatPassword(),
    };
    dispatch(validation(validationErrors));

    if (!errorsInName() && !errorsInEmail() && !errorsInPassword() && !errorsInRepeatPassword()){
      const req = {
        email: email,
        password: password,
      };
      dispatch(registrationRequestAsync(req));
      setIsSubmited(true);
    }else{
      return;
    };
  };

  useEffect(() => {
    if (token && token !== 'undefined' && isSumbited){
      navigate("/users");
    };
  }, [token, isSumbited])


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span className={styles.formTitle}>Регистрация</span>
      <FormFieldset/>
      <FormBtn/>
      {loading &&
        <div className={styles.formWarningBlock}>
          <div className={styles.formWarning}>Загрузка...</div>
        </div>

      }
      {error &&
        <div className={styles.formWarningBlock}>
          <div className={styles.formWarning}>{error}</div>
        </div>
      }
    </form>
  );
}
