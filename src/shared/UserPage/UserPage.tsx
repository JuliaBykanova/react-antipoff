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

  const userPageContainer = classNames(
    styles.infoBlock,
    `container`
  );

  if(userData){
    localStorage.setItem(`name_${id}`, userData.first_name);
    localStorage.setItem(`surname_${id}`, userData.last_name);
    localStorage.setItem(`avatar_${id}`, userData.avatar);
    localStorage.setItem(`email_${id}`, userData.email);
  };

  if(!userData && !localStorage.getItem(`name_${id}`)){
    console.log(localStorage.getItem(`name_${id}`));
    return (
      <Header>
        <div className={styles.userError}>Не получилось найти пользователя</div>
        <ExitBtn/>
        <StapBackBtn/>
      </Header>
    );

  }

  
  return (
    <div className={styles.layout}>
      <Header>
        <UserHeaderContent name={localStorage.getItem(`name_${id}`) || userData?.first_name || 'Anon'} surname={localStorage.getItem(`surname_${id}`) || userData?.last_name || 'Anon'} imgSrc={localStorage.getItem(`avatar_${id}`) || userData?.avatar || 'Anon'}/>
      </Header>
      <Content>
        <div className={userPageContainer}>
          <UserTextBlock/>
          <UserContactList email={localStorage.getItem(`email_${id}`) || userData?.email || 'Anon'}/>
        </div>
      </Content>
    </div>
  );

}
