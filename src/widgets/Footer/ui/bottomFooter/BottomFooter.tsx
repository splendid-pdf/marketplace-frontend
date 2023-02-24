import React from "react";
import classes from "./BottomFooter.module.scss";

export const BottomFooter: React.FC = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterContainer + " " + "container"}>
        <div className={classes.FooterAgreement}>
          <p className={classes.AgreementText}>Соглашение о конфиденциальности</p>
          <p className={classes.AgreementText}>Пользовательское Соглашение</p>
        </div>
        <div className={classes.FooterRights}>
          <p className={classes.RightsText}>© 2023 ООО «ClickAndBuy». Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
