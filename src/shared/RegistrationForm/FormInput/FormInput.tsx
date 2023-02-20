import React, { ChangeEvent } from 'react';
import styles from './forminput.css';

interface IFormInput{
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ariaInvalid: 'true' | undefined;
  type: string;
}

export function FormInput({value, onChange, ariaInvalid, type}: IFormInput) {
  return (
    <input className={styles.input} value={value} onChange={onChange} aria-invalid={ariaInvalid} type={type}/>
  );
}
