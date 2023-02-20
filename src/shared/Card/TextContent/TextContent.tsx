import React from 'react';
import styles from './textcontent.css';

interface ITextContent {
  name: string;
  surname: string;
}

export function TextContent({name, surname}: ITextContent) {
  const fullName = name + ' ' + surname;
  return (
    <p className={styles.textContent}>
      {fullName}
    </p>
  );
}
