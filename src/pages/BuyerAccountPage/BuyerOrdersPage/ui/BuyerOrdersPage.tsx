import { Typography } from '@mui/material';
import classes from './BuyerOrdersPage.module.scss';

const BuyerOrdersPage = () => {
  return (
    <div className={`${classes.BuyerOrdersPage} rightWrapper`}>
      <Typography variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 36,
        }}
      >
        Мои заказы
      </Typography>
    </div>    
  );
};

export default BuyerOrdersPage;
