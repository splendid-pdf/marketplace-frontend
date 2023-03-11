import React from "react";
import { OrderCard } from "shared/ui/OrderCard";
import classes from "./ActiveOrdersPage.module.scss";

export const ActiveOrdersPage: React.FC = () => {
  return (
    <div className={classes.ActiveOrdersPage}>
      <OrderCard />
    </div>
  );
};
