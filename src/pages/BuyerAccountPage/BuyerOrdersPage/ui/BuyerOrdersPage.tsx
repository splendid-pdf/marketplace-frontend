import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./BuyerOrdersPage.module.scss";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { ReactComponent as SearchIcon } from "shared/images/icons/search.svg";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

const BuyerOrdersPage: React.FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.activeLink : classes.baseLink;

  return (
    <div className={`${classes.BuyerOrdersPage} rightWrapper`}>
      <div className={classes.ordersHeader}>
        <div className={classes.ordersHeader__linkWrapper}>
          <NavLink to={`/${BASE_URL}/buyer/account/orders/my-orders`} className={setActive}>
            Мои заказы
          </NavLink>
          <NavLink to={`/${BASE_URL}/buyer/account/orders/return`} className={setActive}>
            Мои возвраты
          </NavLink>
        </div>
        <TextField
          placeholder="Поиск заказа"
          size="small"
          autoComplete="off"
          className={classes.searchOrder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default BuyerOrdersPage;
