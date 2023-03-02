import { Typography } from '@mui/material';
import classes from './BuyerSettingsPage.module.scss';

const BuyerSettingsPage = () => {
  return (
    <div className={`${classes.BuyerSettingsPage} rightWrapper`}>
      <Typography variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 36,
        }}
      >
        Настройки и уведомления
      </Typography>
    </div>    
  );
};

export default BuyerSettingsPage;
