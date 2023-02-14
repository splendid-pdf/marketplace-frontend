import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BASE_URL } from 'shared/constants/base_url';

import ContactsPage from './ContactsPage/ContactsPage';
import HomePage from './HomePage/HomePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import UserProfilePage from './UserProfilePage/UserProfilePage';
import SellerHomePage from './SellerHomePage/SellerHomePage';

// import { lazy } from 'react';
// const HomePage = lazy(() => import('./HomePage/HomePage'));
// const ContactsPage = lazy(() => import('./ContactsPage/ContactsPage'));
// const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
// const UserProfilePage = lazy(() => import('./UserProfilePage/UserProfilePage'));

const Routing: React.FC = () => {
  const baseUrl = BASE_URL;

  return (
    <Routes>
      <Route path={`/${baseUrl}`} element={<HomePage />} />
      <Route path={`/${baseUrl}/userProfile`} element={<UserProfilePage />} />
      {/* <Route path={`/${baseUrl}/catalogue:id`} element={<ItemPage />} /> */}
      <Route path={`/${baseUrl}/contacts`} element={<ContactsPage />} />
      <Route path={`/${baseUrl}/seller`} element={<SellerHomePage />} />
      <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
