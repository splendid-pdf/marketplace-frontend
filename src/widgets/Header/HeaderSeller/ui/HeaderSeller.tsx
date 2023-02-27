import classes from "./HeaderSeller.module.scss";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import { ReactComponent as Logo } from "shared/images/icons/logo.svg";
import { IconWithText } from "shared/ui/IconWithText/IconWithText";
import { ReactComponent as PersonIcon } from "shared/images/icons/person.svg";
import { NavBarSeller } from "widgets/Header/NavBarSeller";

export const HeaderSeller = () => {
  return (
    <div className={classes.headerSeller}>
      <div className={classes.headerSeller__wrapper + " " + "container"}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={classes.headerSeller__appBar}>
            <Toolbar className={classes.headerSeller__toolBar}>
              <Link to={BASE_URL}>
                <Logo fill="#1F1D1D" />
              </Link>
              <Typography
                className={classes.headerSeller__typography}
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Seller
              </Typography>
              <Box>
                <Link
                  to="#"
                  // onClick={() => setItemToLS(LS_KEY_ROLE, "buyer")}
                  className={classes.link}
                >
                  <IconWithText icon={<PersonIcon />} text={"Войти"} />
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <div className={classes.headerSeller__nav}>
            <NavBarSeller />
          </div>
        </Box>
      </div>
    </div>
  );
};
