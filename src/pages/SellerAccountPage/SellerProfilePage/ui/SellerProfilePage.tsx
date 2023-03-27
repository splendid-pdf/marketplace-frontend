import { SellerProfileCard } from "entities/SellerProfile";
import { Typography } from "@mui/material";
import classes from "./SellerProfilePage.module.scss";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

const SellerProfilePage = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.activeLink : classes.baseLink;
  return (
    <div className={`${classes.SellerProfilePage} rightWrapper`}>
      <SellerProfileCard />
    </div>
  );
};

export default SellerProfilePage;
