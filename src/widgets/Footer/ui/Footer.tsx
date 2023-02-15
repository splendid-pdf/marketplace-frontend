import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'shared/constants/base_url';
import classes from './Footer.module.scss';
import { Link as LinkMUI } from '@mui/material';

// LinkMUI временное решение, кто будет делать footer, можно удалять и ссылку вешать на свой элемент.
// LinkMUI, это переименованная Link от material, т.к. получается конфликт с Linkой от react-router-dom.

export const Footer: React.FC = () => {
  return (
    <div className={classes.Footer}>
      <h2 style={{ fontSize: 24 }}>Footer</h2>
      <LinkMUI to={`/${BASE_URL}/registerSeller`} underline="none" component={Link}>
        Создать аккаунт продавца
      </LinkMUI>
    </div>
  );
};
