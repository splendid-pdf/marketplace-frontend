import React from 'react';
import classes from './SellerFooter.module.scss';
import { ReactComponent as Logo } from "../../../../shared/images/icons/logo.svg";
import { BASE_URL } from 'shared/constants/base_url';
import { Link } from 'react-router-dom';


const SellerFooter = () => {

  const baseUrl = BASE_URL;

  return (
    <div className={classes.Footer}>
      <div className={classes.FooterWrapper}>
        <div className={classes.FooterContainer}>
          <Link className={classes.FooterLogoContainer} to={baseUrl}>
            <Logo/>
            <span className={classes.FooterSellerLogo}>Seller</span>
          </Link>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.FooterHeading}>
            Финансы
          </div>
          <div className={classes.FooterLinks}>
            <div><Link to={`#`}>Финансовые отчеты</Link></div>
            <div><Link to={`#`}>Аналитика</Link></div>
          </div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.FooterHeading}>Реклама</div>
          <div className={classes.FooterLinks}>
            <div><Link to={`#`}>Баннеры</Link></div>
            <div><Link to={`#`}>Продвижение</Link></div>
            <div><Link to={`#`}>Акции маркетплейса</Link></div>
          </div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.FooterHeading}>Адреса пунктов приема</div>
          <div className={classes.FooterLinks}>
            <div><Link to={`#`}>Карта складов</Link></div>
          </div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.AppLinksContainer}>
            <div className={classes.FooterHeading}>Поддержка</div>
            <div className={classes.FooterLinks}>
              <div><Link to={`#`}>Часто задаваемые вопросы</Link></div>
              <div className={classes.FooterHeading}>
                <Link to='mailto:example@example.com'>clickandbuyseller@ya.ru</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerFooter;