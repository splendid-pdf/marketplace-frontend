import { IconButton } from "@mui/material";
import React from "react";
import classNames from "classnames";
import classes from "./SellerHomePage.module.scss";
import { ReactComponent as InfoIcon } from "../../shared/images/icons/info.svg";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis }  from "recharts";
import { 
  ButtonMarketPlace, 
  ButtonVariant, 
  TextColorVarian} from "shared/ui/Button/ButtonMarketPlace";

const statistics= [
  {
    "name": 1,
    "Январь": 2000,
    "Февраль": 1000,
  },
  {
    "name": 5,
    "Январь": 3000,
    "Февраль": 2000,
  },
  {
    "name": 10,
    "Январь": 1000,
    "Февраль": 5500,
  },
  {
    "name": 15,
    "Январь": 2780,
    "Февраль": 3500,
  },
  {
    "name": 20,
    "Январь": 1890,
    "Февраль": 4100,
  },
  {
    "name": 25,
    "Январь": 3100,
    "Февраль": 3000,
  },
  {
    "name": 30,
    "Январь": 3500,
    "Февраль": 2500,
  }
]

const rating = [
  {
    "name": 1,
    "points": 0
  },
  {
    "name": 2,
    "points": 4
  },
  {
    "name": 3,
    "points": 3,
  },
  {
    "name": 4,
    "points":6,
  },
  {
    "name": 5,
    "points": 5,
  },
  {
    "name": 6,
    "points": 10,
  }
]

const SellerHomePage: React.FC = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className={classes.headerContentSeller}>
        <div className={classNames(
          classes.headerContentSeller__balance,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Баланс</h2>
            <IconButton color="primary" aria-label="info" sx={{padding:0}}>
              <InfoIcon />
            </IconButton>
          </div>
          <div className={classes.headerContentSeller__balanceNumder}>0</div>
          <ButtonMarketPlace
            text="Вывести"
            variant={ButtonVariant.contained}
            className={classes.headerContentSeller__greyBtn}
            textColor={TextColorVarian.white}
          />
        </div>

        <div className={classNames(
          classes.headerContentSeller__rating,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Рейтинг</h2>
            <IconButton color="primary" aria-label="info" sx={{padding:0}}>
              <InfoIcon />
            </IconButton>
          </div>
          <ResponsiveContainer height='72%' width='100%'>
            <AreaChart data={rating} margin={{ left: 100}}>
              <Area type="monotone" dataKey="points" stroke="#A3A3A3" 
                fillOpacity={1} fill="rgba(241, 241, 241, 0.5)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={classNames(
          classes.headerContentSeller__salesDay,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Продажи за день</h2>
            <IconButton color="primary" aria-label="info" sx={{padding:0}}>
              <InfoIcon />
            </IconButton>
          </div>
          <ResponsiveContainer height='72%' width='100%'>
            <AreaChart data={rating} margin={{ left: 100}}>
              <Area type="monotone" dataKey="points" stroke="#A3A3A3" 
                fillOpacity={1} fill="rgba(241, 241, 241, 0.5)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={classNames(
          classes.headerContentSeller__salesWeek,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Продажи за неделю</h2>
            <IconButton color="primary" aria-label="info" sx={{padding:0}}>
              <InfoIcon />
            </IconButton>
          </div>
          <ResponsiveContainer height='72%' width='100%'>
            <AreaChart data={rating} margin={{ left: 100}}>
              <Area type="monotone" dataKey="points" stroke="#A3A3A3" 
                fillOpacity={1} fill="rgba(241, 241, 241, 0.5)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={classNames(
          classes.headerContentSeller__statistics,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Статистика</h2>
            <div className={classes.headerContentSeller__calendar}>
              <p>2023</p>
              <p className={classes.headerContentSeller__circleBlack}>Февраль</p>
              <p className={classes.headerContentSeller__circleGrey}>Январь</p>
            </div>
          </div>
          <ResponsiveContainer height='85%' width='100%'>
            <AreaChart data={statistics}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid horizontal = {true} vertical={false} stroke="#F4F4F4" />
              <Tooltip />
              <Area type="monotone" dataKey="Январь" 
                stroke="#343136" fillOpacity={1} fill="rgba(52, 49, 54, 0.2)" />
              <Area type="monotone" dataKey="Февраль" stroke="#A3A3A3" 
                fillOpacity={1} fill="rgba(241, 241, 241, 0.5)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={classNames(
          classes.headerContentSeller__orders,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Новые заказы</h2>
            <span>Все заказы</span>
          </div>
          <div className={classes.headerContentSeller__development}><h3>В разработке</h3></div>
        </div>

        <div className={classNames(
          classes.headerContentSeller__reviews,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <div><h2>Отзывы и опросы</h2></div>
            <div>
              <span className={classes.headerContentSeller__marginSpan}>Отзывы</span>
              <span>Вопросы</span>
            </div>
          </div>
          <div className={classes.headerContentSeller__development}><h3>В разработке</h3></div>
        </div>

        <div className={classNames(
          classes.headerContentSeller__list,
          classes.headerContentSeller__mainCard)}>
          <div className={classes.headerContentSeller__headerCard}>
            <h2>Список ваших магазинов</h2>
          </div>
          <div className={classes.headerContentSeller__development}><h3>В разработке</h3></div>
        </div>
      </div> 
    </div>
  )
};
export default SellerHomePage;
