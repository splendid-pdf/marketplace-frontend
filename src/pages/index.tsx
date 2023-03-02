import React from "react";
import { Route, Routes } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import GetParameterPopups from "./PopupsRoutes";
import HomePage from "./HomePage/HomePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import CartPage from "./CartPage/CartPage";
import DeliveryPage from "./DeliveryPage/DeliveryPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import AuthSellerPage from "./AuthSellerPage/AuthSellerPage";
import RegisterSellerPage from "./RegisterSellerPage/RegisterSellerPage";
import SellerBasePage from "./SellerBasePage/SellerBasePage";
import SellerHomePage from "./SellerHomePage/SellerHomePage";
import SellerProductPage from "./SellerProductPage/SellerProductPage";
import SellerOrdersPage from "./SellerOrdersPage/SellerOrdersPage";
import BuyerAccountPage from './BuyerAccountPage/BuyerAccountPage';
import { BuyerProfilePage } from './BuyerAccountPage/BuyerProfilePage';
import { BuyerOrdersPage } from './BuyerAccountPage/BuyerOrdersPage';
import { BuyerFeedbackPage } from './BuyerAccountPage/BuyerFeedbackPage';
import { BuyerSettingsPage } from './BuyerAccountPage/BuyerSettingsPage';

const Routing: React.FC = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={"content" + " " + "container"}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={`/${baseUrl}`} element={<HomePage />} />
        <Route path={`/${baseUrl}/buyer/account/`} element={<BuyerAccountPage />} > 
          <Route index element={<BuyerProfilePage />} />
          <Route path="details" element={<BuyerProfilePage />} />
          <Route path="orders" element={<BuyerOrdersPage />} />
          <Route path="feedback" element={<BuyerFeedbackPage />} />
          <Route path="settings" element={<BuyerSettingsPage />} />
        </Route>
        <Route path={`/${baseUrl}/delivery`} element={<DeliveryPage />} />
        <Route path={`/${baseUrl}/favorites`} element={<FavoritesPage />} />
        <Route path={`/${baseUrl}/cart`} element={<CartPage />} />
        <Route path={`/${baseUrl}/auth-seller`} element={<AuthSellerPage />} />
        <Route
          path={`/${baseUrl}/register-seller`}
          element={<RegisterSellerPage />}
        />
        <Route path={`/${baseUrl}/home-seller`} element={<SellerBasePage />}>
          <Route index element={<SellerHomePage />} />
          <Route path="product" element={<SellerProductPage />} />
          <Route path="orders" element={<SellerOrdersPage />} />
        </Route>
        <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
      </Routes>
      <GetParameterPopups />
    </div>
  );
};

export default Routing;
