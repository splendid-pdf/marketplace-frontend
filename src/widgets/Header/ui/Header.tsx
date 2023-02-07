import React from 'react';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={classes.Header}>
      <h2 style={{ fontSize: 24, marginBottom: 10 }}>Header</h2>
    </div>
  );
};
