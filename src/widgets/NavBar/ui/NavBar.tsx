import { Link } from 'react-router-dom';
import React from 'react';
import classes from './NavBar.module.scss';
import { BASE_URL } from '../../../shared/constants/base_url';
import { RegisterForm } from 'features/RegisterUser';

export const NavBar = () => {
  const baseUrl = BASE_URL;
  const [isOpen, setIsOpen] = React.useState(false);
  const onRegisterForm = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={classes.nav}>
      <RegisterForm isOpen={isOpen} onClose={onRegisterForm} />
      <button onClick={onRegisterForm}>Войти</button>
      <Link to={`/${baseUrl}`}>Главная</Link>
      <Link to={`/${baseUrl}/userProfile`}>Профиль пользователя</Link>
      <Link to={`/${baseUrl}/contacts`}>Контакты</Link>
    </div>
  );
};
