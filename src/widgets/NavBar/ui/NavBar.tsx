import { Link } from 'react-router-dom';
import React from 'react';
import classes from './NavBar.module.scss';
import { BASE_URL } from '../../../shared/constants/base_url';
import { setItemToLS } from '../../../shared/utils/setItemToLS';
import { LS_KEY_ROLE } from '../../../shared/constants/localStorage';

export const NavBar = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={classes.nav}>
      <Link to={`/${baseUrl}`}>Главная</Link>
      <Link to={`?popup=login`} 
        onClick={() => setItemToLS(LS_KEY_ROLE, 'buyer')}
      >
        Войти
      </Link>
      <Link to={`/${baseUrl}/userProfile`}>Профиль пользователя</Link>
      <Link to={`/${baseUrl}/contacts`}>Контакты</Link>
    </div>
  );
};
