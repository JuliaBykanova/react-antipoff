import React from 'react';
import { AvatarIcon } from '../Card/AvatarIcon';
import { ExitBtn } from '../ExitBtn';
import styles from './userheadercontent.css';
import classNames from 'classnames';
import { HeaderUserInfo } from '../HeaderUserInfo';
import { StapBackBtn } from '../StapBackBtn';

interface IUserHeaderContent{
  name: string;
  surname: string;
  imgSrc: string;
}

export function UserHeaderContent({name, surname, imgSrc}: IUserHeaderContent) {

  const headerContainer = classNames(
    styles.headerContainer,
    `container`
  )

  return (
    <div className={headerContainer}>
      <div className={styles.headerIcon}>
        <AvatarIcon imgSrc={imgSrc} size={187}/>
      </div>
      <HeaderUserInfo name={name} surname={surname}/>
      <ExitBtn/>
      <StapBackBtn/>
    </div>
  );
}
