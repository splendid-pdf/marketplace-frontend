/* eslint-disable max-len */
import { Outlet, RouteProps } from 'react-router-dom';
import { BASE_URL } from '../../shared/constants/base_url';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import DeliveryPage from '../../pages/DeliveryPage/DeliveryPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import CartPage from '../../pages/CartPage/CartPage';
import BuyerAccountPage from '../../pages/BuyerAccountPage/BuyerAccountPage';
import { BuyerProfilePage } from '../../pages/BuyerAccountPage/BuyerProfilePage';
import { ActiveOrdersPage, ArchiveOrdersPage, ChecksOrdersPage } from '../../pages/BuyerAccountPage/BuyerOrdersPage/pages/BaseMyOrdersPage/pages';
import { ReturnOrdersPage, ReturnProcessingPage } from '../../pages/BuyerAccountPage/BuyerOrdersPage/pages/BaseMyReturnOrdersPage/pages';
import { BaseMyOrdersPage, BaseMyReturnOrdersPage } from '../../pages/BuyerAccountPage/BuyerOrdersPage/pages';
import { BuyerFeedbackPage } from '../../pages/BuyerAccountPage/BuyerFeedbackPage';
import { BuyerSettingsPage } from '../../pages/BuyerAccountPage/BuyerSettingsPage';
import { SellerBaseProductPage } from '../../pages/SellerBaseProductPage/SellerBaseProductPage';
import { SellerArchivePage } from '../../pages/SellerArchivePage/SellerArchivePage';
import { SellerReviewsPage } from '../../pages/SellerReviewsPage/SellerReviewsPage';
import { SellerQuestionsPage } from '../../pages/SellerQuestionsPage/SellerQuestionsPage';
import { SellerRecommendationsPage } from '../../pages/SellerRecommendationsPage/SellerRecommendationsPage';
import { SellerBaseOrdersPage } from '../../pages/SellerBaseOrdersPage/SellerBaseOrdersPage';
import { SellerActiveOrdersPage } from '../../pages/SellerActiveOrdersPage/SellerActiveOrdersPage';
import { SellerCompletedOrdersPage } from '../../pages/SellerCompletedOrdersPage/SellerCompletedOrdersPage';
import AuthSellerPage from '../../pages/AuthSellerPage/AuthSellerPage';
import RegisterSellerPage from '../../pages/RegisterSellerPage/RegisterSellerPage';
import SellerAccountPage from '../../pages/SellerAccountPage/SellerAccountPage';
import { SellerProfilePage } from '../../pages/SellerAccountPage/SellerProfilePage';
import { SellerShopsPage } from '../../pages/SellerAccountPage/SellerShopsPage';
import { SellerAccessesPage } from '../../pages/SellerAccountPage/SellerAccessesPage';
import { SellerNotificationsPage } from '../../pages/SellerAccountPage/SellerNotificationsPage';
import SellerHomePage from '../../pages/SellerHomePage/SellerHomePage';
import SellerProductPage from '../../pages/SellerProductPage/SellerProductPage';
import SellerOrdersPage from '../../pages/SellerOrdersPage/SellerOrdersPage';
import { BuyerOrdersPage } from '../../pages/BuyerAccountPage/BuyerOrdersPage';
import { ReactNode } from 'react';

export type AppRoutesProps = RouteProps & {
  buyerAuth?: boolean;
  sellerAuth?: boolean;
  isAuth?: boolean;
}

export enum AppRoutes {
  HOME = 'home',
  DELIVERY = 'delivery',
  FAVORITES = 'favorites',
  CART = 'cart',

  BUYER_ACCOUNT = 'buyer/account',
  BUYER_DETAILS = 'buyer/account/details',
  BUYER_ORDERS = 'buyer/account/orders',
  BUYER_MY_ORDERS = 'buyer/account/orders/my-orders',
  BUYER_ARCHIVE_ORDERS = 'buyer/account/orders/my-orders/archive',
  BUYER_CHECKS = 'buyer/account/orders/my-orders/checks',
  BUYER_RETURNS = 'buyer/account/orders/return',
  BUYER_RETURNS_PROCESSING = 'buyer/account/orders/return/processing',
  BUYER_FAVORITES = 'buyer/account/favorites',
  BUYER_FEEDBACK = 'buyer/account/feedback',
  BUYER_SETTINGS = 'buyer/account/settings',

  SELLER_HOME = 'home-seller',

  SELLER_PRODUCTS = 'home-seller/product',
  SELLER_PRODUCTS_ARCHIVE = 'home-seller/product/archive',
  SELLER_PRODUCTS_REVIEWS = 'home-seller/product/reviews',
  SELLER_PRODUCTS_QUESTIONS = 'home-seller/product/questions',
  SELLER_PRODUCTS_RECOMMENDATIONS = 'home-seller/product/recommendations',

  SELLER_ORDERS = 'home-seller/orders',
  SELLER_ACTIVE_ORDERS = 'home-seller/orders/activeorders',
  SELLER_COMPLETED_ORDERS = 'home-seller/orders/completeorders',

  SELLER_AUTH = 'auth-seller',
  SELLER_REGISTER = 'register-seller',

  SELLER_ACCOUNT = 'seller/account',
  SELLER_DETAILS = 'seller/account/details',
  SELLER_SHOPS = 'seller/account/shops',
  SELLER_ACCESSES = 'seller/account/accesses',
  SELLER_NOTIFICATIONS = 'seller/account/notifications',

  NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: `${BASE_URL}/`,
  [AppRoutes.DELIVERY]: `${BASE_URL}/delivery`,
  [AppRoutes.FAVORITES]: `${BASE_URL}/favorites`,
  [AppRoutes.CART]: `${BASE_URL}/cart`,

  [AppRoutes.BUYER_ACCOUNT]: `${BASE_URL}/buyer/account`,
  [AppRoutes.BUYER_DETAILS]: `${BASE_URL}/buyer/account/details`,
  [AppRoutes.BUYER_ORDERS]: `${BASE_URL}/buyer/account/orders`,
  [AppRoutes.BUYER_MY_ORDERS]: `${BASE_URL}/buyer/account/orders/my-orders`,
  [AppRoutes.BUYER_ARCHIVE_ORDERS]: `${BASE_URL}/buyer/account/orders/my-orders/archive`,
  [AppRoutes.BUYER_CHECKS]: `${BASE_URL}/buyer/account/orders/my-orders/checks`,
  [AppRoutes.BUYER_RETURNS]: `${BASE_URL}/buyer/account/orders/return`,
  [AppRoutes.BUYER_RETURNS_PROCESSING]: `${BASE_URL}/buyer/account/orders/return/processing`,
  [AppRoutes.BUYER_FAVORITES]: `${BASE_URL}/buyer/account/favorites`,
  [AppRoutes.BUYER_FEEDBACK]: `${BASE_URL}/buyer/account/feedback`,
  [AppRoutes.BUYER_SETTINGS]: `${BASE_URL}/buyer/account/settings`,

  [AppRoutes.SELLER_AUTH]: `${BASE_URL}/auth-seller`,
  [AppRoutes.SELLER_REGISTER]: `${BASE_URL}/register-seller`,

  [AppRoutes.SELLER_HOME]: `${BASE_URL}/home-seller`,
  [AppRoutes.SELLER_PRODUCTS]: `${BASE_URL}/home-seller/product`,
  [AppRoutes.SELLER_PRODUCTS_ARCHIVE]: `${BASE_URL}/home-seller/product/archive`,
  [AppRoutes.SELLER_PRODUCTS_REVIEWS]: `${BASE_URL}/home-seller/product/reviews`,
  [AppRoutes.SELLER_PRODUCTS_QUESTIONS]: `${BASE_URL}/home-seller/product/questions`,
  [AppRoutes.SELLER_PRODUCTS_RECOMMENDATIONS]: `${BASE_URL}/home-seller/product/recommendations`,
  [AppRoutes.SELLER_ORDERS]: `${BASE_URL}/home-seller/orders`,
  [AppRoutes.SELLER_ACTIVE_ORDERS]: `${BASE_URL}/home-seller/orders/activeorders`,
  [AppRoutes.SELLER_COMPLETED_ORDERS]: `${BASE_URL}/home-seller/orders/completeorders`,

  [AppRoutes.SELLER_ACCOUNT]: `${BASE_URL}/seller/account`,
  [AppRoutes.SELLER_DETAILS]: `${BASE_URL}/seller/account/details`,
  [AppRoutes.SELLER_SHOPS]: `${BASE_URL}/seller/account/shops`,
  [AppRoutes.SELLER_ACCESSES]: `${BASE_URL}/seller/account/accesses`,
  [AppRoutes.SELLER_NOTIFICATIONS]: `${BASE_URL}/seller/account/notifications`,

  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    index: true,
    path: RoutePath.home,
    element: <HomePage />,
  },  
  
  [AppRoutes.DELIVERY]: {
    path: RoutePath.delivery,
    element: <DeliveryPage />,
  },
  [AppRoutes.FAVORITES]: {
    path: RoutePath.favorites,
    element: <FavoritesPage />,
    buyerAuth: true,
    isAuth: true,

  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },

  [AppRoutes.BUYER_ACCOUNT]: {
    path: RoutePath['buyer/account'],
    element: <BuyerAccountPage />,
    buyerAuth: true,
    isAuth: true,
    children: [
      <BuyerProfilePage key={Date.now()}/>,
      <BuyerOrdersPage key={Date.now()} />,
      <BuyerFeedbackPage key={Date.now()} />,
      <BuyerSettingsPage key={Date.now()} />,
    ],
  },
  [AppRoutes.BUYER_DETAILS]: {
    path: RoutePath['buyer/account/details'],
    index: true,
    element: <BuyerProfilePage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_ORDERS]: {
    path: RoutePath['buyer/account/orders'],
    element: <BuyerOrdersPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_MY_ORDERS]: {
    path: RoutePath['buyer/account/orders/my-orders'],
    element: <BaseMyOrdersPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_ARCHIVE_ORDERS]: {
    path: RoutePath['buyer/account/orders/my-orders/archive'],
    index: true,
    element: <ArchiveOrdersPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_CHECKS]: {
    path: RoutePath['buyer/account/orders/my-orders/checks'],
    element: <ChecksOrdersPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_RETURNS]: {
    path: RoutePath['buyer/account/orders/return'],
    index: true,
    element: <ReturnOrdersPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_RETURNS_PROCESSING]: {
    path: RoutePath['buyer/account/orders/return/processing'],
    element: <ReturnProcessingPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_FAVORITES]: {
    path: RoutePath['buyer/account/favorites'],
    element: <FavoritesPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_FEEDBACK]: {
    path: RoutePath['buyer/account/feedback'],
    element: <BuyerFeedbackPage />,
    buyerAuth: true,
    isAuth: true,
  },
  [AppRoutes.BUYER_SETTINGS]: {
    path: RoutePath['buyer/account/settings'],
    element: <BuyerSettingsPage />,
    buyerAuth: true,
    isAuth: true,
  },

  [AppRoutes.SELLER_HOME]: {
    path: RoutePath['home-seller'],
    index: true,
    element: <SellerHomePage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_PRODUCTS]: {
    path: RoutePath['home-seller/product'],
    index: true,
    element: <SellerProductPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_PRODUCTS_ARCHIVE]: {
    path: RoutePath['home-seller/product/archive'],
    element: <SellerArchivePage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_PRODUCTS_REVIEWS]: {
    path: RoutePath['home-seller/product/reviews'],
    element: <SellerReviewsPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_PRODUCTS_QUESTIONS]: {
    path: RoutePath['home-seller/product/questions'],
    element: <SellerQuestionsPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_PRODUCTS_RECOMMENDATIONS]: {
    path: RoutePath['home-seller/product/recommendations'],
    element: <SellerRecommendationsPage />,
    sellerAuth: true,
    isAuth: true,
  },

  [AppRoutes.SELLER_ORDERS]: {
    path: RoutePath['home-seller/orders'],
    index: true,
    element: <SellerOrdersPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_ACTIVE_ORDERS]: {
    path: RoutePath['home-seller/orders/activeorders'],
    element: <SellerActiveOrdersPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_COMPLETED_ORDERS]: {
    path: RoutePath['home-seller/orders/completeorders'],
    element: <SellerCompletedOrdersPage />,
    sellerAuth: true,
    isAuth: true,
  },

  [AppRoutes.SELLER_AUTH]: {
    path: RoutePath['auth-seller'],
    element: <AuthSellerPage />,
  },
  [AppRoutes.SELLER_REGISTER]: {
    path: RoutePath['register-seller'],
    element: <RegisterSellerPage />,
  },
  [AppRoutes.SELLER_ACCOUNT]: {
    path: RoutePath['seller/account'],
    element: <SellerAccountPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_DETAILS]: {
    path: RoutePath['seller/account/details'],
    index: true,
    element: <SellerProfilePage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_SHOPS]: {
    path: RoutePath['seller/account/shops'],
    element: <SellerShopsPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_ACCESSES]: {
    path: RoutePath['seller/account/accesses'],
    element: <SellerAccessesPage />,
    sellerAuth: true,
    isAuth: true,
  },
  [AppRoutes.SELLER_NOTIFICATIONS]: {
    path: RoutePath['seller/account/notifications'],
    element: <SellerNotificationsPage />,
    sellerAuth: true,
    isAuth: true,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
