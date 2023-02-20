import React from 'react';
import { MailIcon } from '../MailIcon';
import { TelIcon } from '../TelIcon';
import { UserContactItem } from '../UserContactItem';
import { UserContactText } from '../UserContactText';
import styles from './usercontactlist.css';

interface IUserContactList{
  email: string;
}

export function UserContactList({email}: IUserContactList) {
  const tel = `+7 (954) 333-44-55`;
  return (
    <ul className={styles.contactList}>
      <UserContactItem>
        <TelIcon/>
        <UserContactText text={tel} />
      </UserContactItem>
      <UserContactItem>
        <MailIcon/>
        <UserContactText text={email} />
      </UserContactItem>
    </ul>
  );
}
