import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./PublicFooter.module.scss";
import { Link as LinkMUI } from "@mui/material";
import { setItemToLS } from "../../../../shared/utils/setItemToLS";
import { LS_KEY_ROLE } from "../../../../shared/constants/localStorage";
import { ReactComponent as Logo } from "../../../../shared/images/icons/logo.svg";
import { ReactComponent as VkIcon } from "../../../../shared/images/icons/vk.svg";
import { ReactComponent as TgIcon } from "../../../../shared/images/icons/tg.svg";
import { ReactComponent as GooglePlayIcon } from "../../../../shared/images/icons/googlePlay.svg";
import { ReactComponent as AppStoreIcon } from "../../../../shared/images/icons/appStore.svg";
import { ReactComponent as YouTubeIcon } from "../../../../shared/images/icons/youTube.svg";

export const PublicFooter: React.FC = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={classes.Footer}>
      <div className={classes.FooterWrapper}>
        <div className={classes.FooterContainer}>
          <Link to={baseUrl}>
            <Logo />
          </Link>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.FooterHeading}>О компании</div>
          <div className={classes.FooterLinks}>
            <div>
              <Link to={`#`}>О нас</Link>
            </div>
            <div>
              <Link to={`#`}>Контакты</Link>
            </div>
            <div>
              <Link to={`#`}>Пункты выдачи</Link>
            </div>
          </div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.FooterHeading}>Покупателям</div>
          <div className={classes.FooterLinks}>
            <div>
              <Link to={`#`}>Связаться с нами</Link>
            </div>
            <div>
              <Link to={`#`}>Как сделать заказ?</Link>
            </div>
            <div>
              <Link to={`#`}>Как оплатить</Link>
            </div>
            <div>
              <Link to={`#`}>Доставка</Link>
            </div>
            <div>
              <Link to={`#`}>Возврат</Link>
            </div>
            <div>
              <Link to={`#`}>Вопрос-ответ</Link>
            </div>
          </div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.FooterHeading}>Продавцам</div>
          <div className={classes.FooterLinks}>
            <div>
              <LinkMUI
                to={`/${BASE_URL}/home-seller`}
                underline="none"
                component={Link}
                onClick={() => setItemToLS(LS_KEY_ROLE, "seller")}
              >
                ЛК продавца
              </LinkMUI>
            </div>
            <div>
              <Link to={`#`}>Продавайте на маркете</Link>
            </div>
            <div>
              <Link to={`#`}>Документация для партнёров</Link>
            </div>
            <div>
              <Link to={`#`}>Вопрос ответ</Link>
            </div>
          </div>
        </div>
        <div className={classes.FooterApsContainer}>
          <div className={classes.AppLinksContainer}>
            <div className={classes.FooterHeading}>Скачать приложение</div>
            <div className={classes.AppLinks}>
              <Link to={`#`}>
                <GooglePlayIcon />
              </Link>
              <Link to={`#`}>
                <AppStoreIcon />
              </Link>
            </div>
          </div>
          <div className={classes.SocialLinksContainer}>
            <div className={classes.FooterHeading}>Мы в соцсетях</div>
            <div className={classes.SocialLinks}>
              <Link to={"#"}>
                <VkIcon />
              </Link>
              <Link to={"#"}>
                <YouTubeIcon />
              </Link>
              <Link to={"#"}>
                <TgIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicFooter;
