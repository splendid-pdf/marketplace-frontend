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
import { SellerArchivePage } from "./SellerArchivePage/SellerArchivePage";
import { SellerReviewsPage } from "./SellerReviewsPage/SellerReviewsPage";
import { SellerQuestionsPage } from "./SellerQuestionsPage/SellerQuestionsPage";
import { SellerRecommendationsPage } from "./SellerRecommendationsPage/SellerRecommendationsPage";
import { SellerActiveOrdersPage } from "./SellerActiveOrdersPage/SellerActiveOrdersPage";
import { SellerCompletedOrdersPage } from "./SellerCompletedOrdersPage/SellerCompletedOrdersPage";
import { SellerBaseOrdersPage } from "./SellerBaseOrdersPage/SellerBaseOrdersPage";
import { SellerBaseProductPage } from "./SellerBaseProductPage/SellerBaseProductPage";
import BuyerAccountPage from "./BuyerAccountPage/BuyerAccountPage";
import SellerAccountPage from "./SellerAccountPage/SellerAccountPage";
import { BuyerProfilePage } from "./BuyerAccountPage/BuyerProfilePage";
import { SellerProfilePage } from "./SellerAccountPage/SellerProfilePage";
import { BuyerOrdersPage } from "./BuyerAccountPage/BuyerOrdersPage";
import { BuyerFeedbackPage } from "./BuyerAccountPage/BuyerFeedbackPage";
import { BuyerSettingsPage } from "./BuyerAccountPage/BuyerSettingsPage";
import { SellerShopsPage } from "./SellerAccountPage/SellerShopsPage";
import { SellerAccessesPage } from "./SellerAccountPage/SellerAccessesPage";
import { SellerNotificationsPage } from "./SellerAccountPage/SellerNotificationsPage";
import {
  BaseMyOrdersPage,
  BaseMyReturnOrdersPage,
} from "./BuyerAccountPage/BuyerOrdersPage/pages";
import {
  ActiveOrdersPage,
  ArchiveOrdersPage,
  ChecksOrdersPage,
} from "./BuyerAccountPage/BuyerOrdersPage/pages/BaseMyOrdersPage/pages";
import {
  ReturnOrdersPage,
  ReturnProcessingPage,
} from "./BuyerAccountPage/BuyerOrdersPage/pages/BaseMyReturnOrdersPage/pages";
import { BuyerPrivateRoutes } from '../app/privateRoutes/BuyerPrivateRoutes';
import { SellerPrivateRoutes } from '../app/privateRoutes/SellerPrivateRoutes';
import { 
  SellerCreateNewProductPage } from "./SellerCreateNewProductPage/SellerCreateNewProductPage";

const Routing: React.FC = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={"content"}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={`/${baseUrl}`} element={<HomePage />} />
        <Route path={`/${baseUrl}/delivery`} element={<DeliveryPage />} />
        <Route path={`/${baseUrl}/cart`} element={<CartPage />} />

        <Route element={<BuyerPrivateRoutes />}>
          <Route path={`/${baseUrl}/favorites`} element={<FavoritesPage />} />
          <Route
            path={`/${baseUrl}/buyer/account/`}
            element={<BuyerAccountPage />}
            >
            <Route index element={<BuyerProfilePage />} />
            <Route path="details" element={<BuyerProfilePage />} />
            <Route path="orders" element={<BuyerOrdersPage />}>
              <Route path="my-orders" element={<BaseMyOrdersPage />}>
                <Route index element={<ActiveOrdersPage />} />
                <Route path="archive" element={<ArchiveOrdersPage />} />
                <Route path="checks" element={<ChecksOrdersPage />} />
              </Route>
              <Route path="return" element={<BaseMyReturnOrdersPage />}>
                <Route index element={<ReturnOrdersPage />} />
                <Route path="processing" element={<ReturnProcessingPage />} />
              </Route>
            </Route>

            <Route path="feedback" element={<BuyerFeedbackPage />} />
            <Route path="settings" element={<BuyerSettingsPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
        </Route>

        <Route path={`/${baseUrl}/auth-seller`} element={<AuthSellerPage />} />
        <Route
          path={`/${baseUrl}/register-seller`}
          element={<RegisterSellerPage />}
        />        
        
        <Route element={<SellerPrivateRoutes />}>

          <Route path={`/${baseUrl}/home-seller`} element={<SellerBasePage />}>
            <Route index element={<SellerHomePage />} />

            <Route path="product" element={<SellerBaseProductPage />}>
              <Route index element={<SellerProductPage />} />
              <Route path="archive" element={<SellerArchivePage />} />
              <Route path="reviews" element={<SellerReviewsPage />} />
              <Route path="questions" element={<SellerQuestionsPage />} />
              <Route
                path="recommendations"
                element={<SellerRecommendationsPage />}
              />
              <Route 
                path="create-new-product" 
                element={<SellerCreateNewProductPage/>} />
            </Route>

            <Route path="orders" element={<SellerBaseOrdersPage />}>
              <Route index element={<SellerOrdersPage />} />
              <Route path="activeorders" element={<SellerActiveOrdersPage />} />
              <Route
                path="completedorders"
                element={<SellerCompletedOrdersPage />}
              />
            </Route>
          </Route>

          <Route
            path={`/${baseUrl}/seller/account/`}
            element={<SellerAccountPage />}
          >
            <Route index element={<SellerProfilePage />} />
            <Route path="details" element={<SellerProfilePage />} />
            <Route path="shops" element={<SellerShopsPage />} />
            <Route path="accesses" element={<SellerAccessesPage />} />
            <Route path="notifications" element={<SellerNotificationsPage />} />
          </Route>
        </Route>

        <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
      </Routes>
      <GetParameterPopups />
    </div>
  );
};

export default Routing;
