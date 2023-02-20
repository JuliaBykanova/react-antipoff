import React from 'react';
import { AvatarIcon } from './AvatarIcon';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Link } from 'react-router-dom';
import { CardBtn } from './CardBtn';

interface IUserData {
  name: string;
  surname: string;
  imgSrc: string;
  email: string;
  id: number;
}

export function Card(props: IUserData) {
  const {
    name,
    surname,
    imgSrc,
    email,
    id,
  } = props;
  return (
    <li className={styles.card}>
      <Link to={`/users/${id}`} className={styles.cardLink}>
        <div className={styles.avatarIcon}>
          <AvatarIcon imgSrc={imgSrc} size={124}/>
        </div>
        <TextContent name={name} surname={surname}/>
        <CardBtn/>
      </Link>

    </li>
  );
}
