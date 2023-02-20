import React from 'react';
import styles from './haederinfo.css';

export function HaederInfo() {
  return (
    <div className={styles.headerInfo}>
      <h1 className={styles.headerTitle}>Наша команда</h1>
      <p className={styles.headerText}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
    </div>
  );
}
