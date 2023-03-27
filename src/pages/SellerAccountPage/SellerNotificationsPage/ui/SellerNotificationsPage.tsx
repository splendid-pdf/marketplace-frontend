import { Typography } from "@mui/material";
import classes from "./SellerNotificationsPage.module.scss";

const SellerNotificationsPage = () => {
  return (
    <div className={`${classes.SellerNotificationsPage} rightWrapper`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Список событий
      </Typography>
    </div>
  );
};

export default SellerNotificationsPage;
