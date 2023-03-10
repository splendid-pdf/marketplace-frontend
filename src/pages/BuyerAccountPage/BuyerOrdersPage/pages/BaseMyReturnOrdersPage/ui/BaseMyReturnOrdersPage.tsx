import React from "react";
import classes from "./BaseMyReturnOrdersPage.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

export const BaseMyReturnOrdersPage: React.FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.activeLink : classes.baseLink;

  return (
    <div>
      <div className={classes.linkWrapper}>
        <NavLink to={`/${BASE_URL}/buyer/account/orders/return`} className={setActive} end>
          Возвраты
        </NavLink>
        <NavLink to={`/${BASE_URL}/buyer/account/orders/return/processing`} className={setActive}>
          Оформить возврат
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
