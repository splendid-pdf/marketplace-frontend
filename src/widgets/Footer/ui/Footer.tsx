import React from "react";
import PublicFooter from "./publicFooter/PublicFooter";
import classes from "./Footer.module.scss";
import BottomFooter from "./bottomFooter/BottomFooter";
import SellerFooter from "./sellerFooter/SellerFooter";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

export const Footer: React.FC = () => {
  const { pathname } = useLocation();

  if (pathname === `/${BASE_URL}/register-seller` || pathname === `/${BASE_URL}/auth-seller`)
    return <></>;

  return (
    <div className={classes.Footer}>
      <div className={classes.FooterWrapper + " " + "container"}>
        {pathname.includes("home-seller") ? <SellerFooter /> : <PublicFooter />}
      </div>
      <BottomFooter />
    </div>
  );
};
