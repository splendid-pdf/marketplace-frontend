import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./BaseMyOrdersPage.module.scss";

export const BaseMyOrdersPage = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.activeLink : classes.baseLink;

  return (
    <div>
      <div className={classes.linkWrapper}>
        <NavLink to={`/${BASE_URL}/buyer/account/orders/my-orders`} className={setActive} end>
          Активные
        </NavLink>
        <NavLink to={`/${BASE_URL}/buyer/account/orders/my-orders/archive`} className={setActive}>
          Архивные
        </NavLink>
        <NavLink to={`/${BASE_URL}/buyer/account/orders/my-orders/checks`} className={setActive}>
          Чеки о покупках
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
