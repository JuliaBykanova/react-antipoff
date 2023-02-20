import classNames from 'classnames';
import React from 'react';
import { ExitBtn } from '../ExitBtn';
import { HaederInfo } from '../HaederInfo';
import styles from './mainheadercontent.css';


export function MainHeaderContent() {

  const headerContainer = classNames(
    styles.headerContainer,
    `container`
  )

  return (
    <div className={headerContainer}>
      <HaederInfo/>
      <ExitBtn/>
    </div>
  );
}
