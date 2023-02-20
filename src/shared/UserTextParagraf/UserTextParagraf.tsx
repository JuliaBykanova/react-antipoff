import React from 'react';
import styles from './usertextparagraf.css';

interface IUserTextParagraf{
  text: string;
}

export function UserTextParagraf({text}: IUserTextParagraf) {
  return (
    <p className={styles.textParagraf}>
      {text}
    </p>
  );
}
