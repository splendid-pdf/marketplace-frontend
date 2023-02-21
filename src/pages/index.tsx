import React from "react";
import { Route, Routes } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

import GetParameterPopups from "./PopupsRoutes";
import HomePage from "./HomePage/HomePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import UserProfilePage from "./UserProfilePage/UserProfilePage";
import CartPage from "./CartPage/CartPage";
import DeliveryPage from "./DeliveryPage/DeliveryPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import AuthSellerPage from "./AuthSellerPage/AuthSellerPage";
import RegisterSellerPage from "./RegisterSellerPage/RegisterSellerPage";
import SellerBasePage from "./SellerBasePage/SellerBasePage";
import SellerHomePage from "./SellerHomePage/SellerHomePage";
import SellerProductPage from "./SellerProductPage/SellerProductPage";

// import { lazy } from 'react';
// const HomePage = lazy(() => import('./HomePage/HomePage'));
// const ContactsPage = lazy(() => import('./ContactsPage/ContactsPage'));
// const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
// const UserProfilePage = lazy(() => import('./UserProfilePage/UserProfilePage'));

const Routing: React.FC = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={"container"}>
      <Routes>
        <Route path={`/${baseUrl}`} element={<HomePage />} />
        <Route path={`/${baseUrl}/userProfile`} element={<UserProfilePage />} />
        {/* <Route path={`/${baseUrl}/catalogue:id`} element={<ItemPage />} /> */}
        <Route path={`/${baseUrl}/delivery`} element={<DeliveryPage />} />
        <Route path={`/${baseUrl}/favorites`} element={<FavoritesPage />} />
        <Route path={`/${baseUrl}/cart`} element={<CartPage />} />
        <Route path={`/${baseUrl}/auth-seller`} element={<AuthSellerPage />} />
        <Route path={`/${baseUrl}/register-seller`} element={<RegisterSellerPage />} />
        <Route path={`/${baseUrl}/home-seller`} element={<SellerBasePage />}>
          <Route path="" element={<SellerHomePage />} />
          <Route path="product" element={<SellerProductPage />} />
        </Route>
        <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
      </Routes>
      <GetParameterPopups />
    </div>
  );
};

export default Routing;
