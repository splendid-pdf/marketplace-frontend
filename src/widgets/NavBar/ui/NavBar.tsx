import { Link } from 'react-router-dom';
import classes from './NavBar.module.scss';
import { BASE_URL } from '../../../shared/constants/base_url';

export const NavBar = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={classes.nav}>
      <Link to={`/${baseUrl}`}>Главная</Link>
      <Link to={`/${baseUrl}/userProfile`}>Профиль пользователя</Link>
      <Link to={`/${baseUrl}/contacts`}>Контакты</Link>
    </div>
  );
};
