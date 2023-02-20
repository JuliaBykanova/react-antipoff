import React from 'react';
import styles from './userpage.css';
import { useParams } from 'react-router-dom';
import { Header } from '../Header';
import { UserHeaderContent } from '../UserHeaderContent';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { IUsersData } from '../store/users/action';
import { Content } from '../Content';
import classNames from 'classnames';
import { UserTextBlock } from '../UserTextBlock';
import { UserContactList } from '../UserContactList';
import { ExitBtn } from '../ExitBtn';
import { StapBackBtn } from '../StapBackBtn';

export function UserPage() {
  const { id } = useParams();
  const data = useSelector<RootState, IUsersData[]>(state => state.user.data);
  const userData = data.find(x => `${x.id}` === id);

  if(!userData){

    return (
      <Header>
        <div className={styles.userError}>Не получилось найти пользователя</div>
        <ExitBtn/>
        <StapBackBtn/>
      </Header>
    );

  }

  const userPageContainer = classNames(
    styles.infoBlock,
    `container`
  );

  return (
    <div className={styles.layout}>
      <Header>
        <UserHeaderContent name={userData.first_name} surname={userData.last_name} imgSrc={userData.avatar}/>
      </Header>
      <Content>
        <div className={userPageContainer}>
          <UserTextBlock/>
          <UserContactList email={userData.email}/>
        </div>
      </Content>
    </div>
  );
}
