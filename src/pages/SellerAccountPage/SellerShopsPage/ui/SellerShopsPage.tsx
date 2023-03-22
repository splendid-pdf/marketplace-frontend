import { BuyerProfileCard } from "entities/BuyerProfile";
import { Typography } from "@mui/material";
import classes from "./SellerShopsPage.module.scss";

const SellerShopsPage = () => {
  return (
    <div className={`${classes.SellerShopsPage} rightWrapper`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Список магазинов
      </Typography>
      <BuyerProfileCard />
    </div>
  );
};

export default SellerShopsPage;
