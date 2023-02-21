import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./Header.module.scss";
import SearchBar from "../searchBar/searchBar";
import { AppBar, Box, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "../../../shared/images/icons/logo.svg";
import { ReactComponent as CatalogIcon } from "../../../shared/images/icons/catalog.svg";
import { ButtonMarketPlace } from "shared/ui/Button/ButtonMarketPlace";
import { NavBar } from "widgets/Header/NavBar";
import { TopHeader } from "../TopHeader/TopHeader";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  if (pathname.includes("home-seller")) return <></>;
  return (
    <>
      <TopHeader />
      <div className={classes.Header}>
        <div className={classes.headerWrapper + " " + "container"}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar className={classes.toolBar}>
                <Link to={BASE_URL}>
                  <Logo fill="#1F1D1D" />
                </Link>
                <ButtonMarketPlace
                  text="Каталог"
                  icon={<CatalogIcon />}
                  className={classes.btnHeader}
                />
                <SearchBar />
                <NavBar />
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </div>
    </>
  );
};
