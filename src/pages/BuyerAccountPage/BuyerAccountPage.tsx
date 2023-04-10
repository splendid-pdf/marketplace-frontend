import { Outlet } from "react-router-dom";
import classes from "./BuyerAccountPage.module.scss";
import { BuyerSidebar } from "../../widgets/BuyerSidebar";

const BuyerAccountPage = () => {

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
