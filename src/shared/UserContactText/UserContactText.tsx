import React from 'react';
import styles from './usercontacttext.css';

interface IUserContactText{
  text: string;
}

export function UserContactText({text}: IUserContactText) {
  return (
    <span className={styles.contactItemText}>{text}</span>
  );
}
