import React from 'react';
import styles from './usercontactitem.css';

interface IUserContactItem{
  children ?: React.ReactNode;
}

export function UserContactItem({children}: IUserContactItem) {
  return (
    <li className={styles.contactItem}>
      {children}
    </li>
  );
}
