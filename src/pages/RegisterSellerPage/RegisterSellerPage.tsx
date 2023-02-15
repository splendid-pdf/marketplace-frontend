import { AuthSellerForm } from 'features/userAuth/sellerAuth';
import { RegisterSellerForm } from 'features/userRegister/sellerRegister';
import classes from './RegisterSellerPage.module.scss';

const RegisterSellerPage = () => {
  return (
    <div className={`${classes.RegisterSellerPage} main`}>
      <h1>Страница регистрации продавца</h1>
      <div style={{ display: 'flex' }}>
        <AuthSellerForm />
        <RegisterSellerForm />
      </div>
    </div>
  );
};

export default RegisterSellerPage;
