import React from 'react';
import classes from './Header.module.scss';
import { UserLocation } from 'features/userLocation/UserLocation';
import SearchBar from '../searchBar/searchBar';

export const Header: React.FC = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.container}>
        <div className={classes.headerWrapper}>
          <h2 style={{ fontSize: 24, marginBottom: 10 }}>Header</h2>
          <UserLocation />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
