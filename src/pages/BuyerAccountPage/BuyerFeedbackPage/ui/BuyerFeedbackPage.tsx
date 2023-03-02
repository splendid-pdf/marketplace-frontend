import { Typography } from '@mui/material';
import classes from './BuyerFeedbackPage.module.scss';

const BuyerFeedbackPage = () => {
  return (
    <div className={`${classes.BuyerFeedbackPage} rightWrapper`}>
      <Typography variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 36,
        }}
      >
        Отзывы и вопросы о товарах
      </Typography>
    </div>    
  );
};

export default BuyerFeedbackPage;
