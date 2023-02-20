import React from 'react';
import styles from './headeruserinfo.css';

interface IHeaderUserInfo{
  name: string;
  surname: string;
}

export function HeaderUserInfo({name, surname}: IHeaderUserInfo) {
  const fullName = name + ' ' + surname;
  return (
    <div className={styles.headerTextContent}>
      <h1 className={styles.headerTitle}>
        {fullName}
      </h1>
      <span className={styles.headerAddInfo}>
        Партнер
      </span>
    </div>
  );
}
