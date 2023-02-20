import React from 'react';
import styles from './avataricon.css';

interface IAvatarIcon {
  imgSrc: string;
  size: number;
}

export function AvatarIcon({imgSrc, size}: IAvatarIcon) {
  return (
    <img width={size} height={size} className={styles.avatarIconImg} src={ imgSrc } alt='user_img' />
  );
}
