import React from 'react';
import { CardList } from '../CardList';
import { Content } from '../Content';
import { Header } from '../Header';
import { MainHeaderContent } from '../MainHeaderContent';
import styles from './layout.css';


export function Layout() {
  return (
    <div className={styles.layout}>
      <Header>
        <MainHeaderContent/>
      </Header>
      <Content>
        <CardList/>
      </Content>
    </div>
  );
}
