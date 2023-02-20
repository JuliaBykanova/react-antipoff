import classNames from 'classnames';
import React, { useState } from 'react';
import { useResize } from '../../hooks/useResize';
import { useUserData } from '../../hooks/useUserData';
import { Card } from '../Card/Card';
import { CardListBtn } from '../CardListBtn';
import { IUsersData } from '../store/users/action';
import styles from './cardlist.css';

export function CardList() {
  const {data, loading, error} = useUserData();
  const [width] = useResize();

  const [loadMore, setLoadMore] = useState(false);

  function handleClickOpen(){
    setLoadMore(true);
  };

  function handleClickClose(){
    setLoadMore(false);
  };

  let firstPartData:IUsersData[];
  let secondPartData:IUsersData[];

  if(width > 1200){
    firstPartData = data.slice(0, 8);
    secondPartData = data.slice(8, 12);
  } else if (width > 576){
    firstPartData = data.slice(0, 6);
    secondPartData = data.slice(6, 12);
  } else{
    firstPartData = data.slice(0, 4);
    secondPartData = data.slice(4, 12);
  }


  const mainClasses = classNames(
    styles.mainContainer,
    'container'
  );

  return (
    <div className={mainClasses}>
      <ul className={styles.cardsList}>
        {error && <div>{error}</div>}

        {loading && <div>Загрузка...</div>}

        {!loading && !error && data.length===0 && <div>Вам нужно зарегистрироваться, чтобы увидеть список пользователей</div>}

        {!loading && firstPartData.length!==0 && firstPartData.map((user) => {
          return <Card name={ user.first_name }
                      surname={ user.last_name }
                      imgSrc={ user.avatar }
                      email={ user.email }
                      id={ user.id }
                      key={user.id}
          />
        }) }


        {!loading && loadMore && secondPartData.length!==0 && secondPartData.map((user) => {
          return <Card name={ user.first_name }
                      surname={ user.last_name }
                      imgSrc={ user.avatar }
                      email={ user.email }
                      id={user.id}
                      key={user.id}
          />
        })}
      </ul>

      {!loadMore &&
        <CardListBtn text={'Показать еще'} onClick={handleClickOpen}/>
      }
      {loadMore &&
        <CardListBtn text={'Скрыть'} onClick={handleClickClose} inverted/>
      }
    </div>

  );
}
