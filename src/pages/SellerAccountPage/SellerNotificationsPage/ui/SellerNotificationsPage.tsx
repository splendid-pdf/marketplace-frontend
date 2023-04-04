import { Typography } from "@mui/material";
import classes from "./SellerNotificationsPage.module.scss";
import SearchBar from "../../../../widgets/Header/searchBar/searchBar";
import FormControl from "@mui/material/FormControl";
import { FormLabel } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

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
      <Typography
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: "16px",
        }}
      >
        У вас пока нет событий.
      </Typography>
      <SearchBar />
      <FormControl className={classes.form_wrapper}>
        <FormLabel className={classes.notification}>Уведомление:</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="СМС" />
          <FormControlLabel value="male" control={<Radio />} label="E-mail" />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Telegram"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default SellerNotificationsPage;
