import { Navigate, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./BuyerAccountPage.module.scss";
import { BuyerSidebar } from "../../widgets/BuyerSidebar";
import { useAppSelector } from '../../app/store/hooks';
import { getBuyerIsAuth } from '../../features/buyerAuth/model/selectors/getBuyerIsAuth';

const BuyerAccountPage = () => {
  const isAuth = useAppSelector(getBuyerIsAuth); 
  if (!isAuth) {
    return <Navigate to={`/${BASE_URL}/?popup=login`} replace={true} />;
  }
  return (
    <div className={"content" + " " + "container"}>
      <div className={`${classes.BuyerAccountPage}`}>
        <BuyerSidebar />
        <div className={`${classes.content}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuyerAccountPage;
