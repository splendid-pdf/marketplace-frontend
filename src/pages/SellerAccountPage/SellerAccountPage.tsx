import { Navigate, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./SellerAccountPage.module.scss";
import { SellerSidebar } from "../../widgets/SellerSidebar";

const SellerAccountPage = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className={`${classes.SellerAccountPage}`}>
        <SellerSidebar />
        <div className={`${classes.content}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerAccountPage;
