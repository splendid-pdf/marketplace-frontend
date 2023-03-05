import { menuItemsSeller, TItems} from "shared/constants/seller_menu";
import { useLocation } from "react-router-dom";
import { BorderColorVarian, ButtonMarketPlace, ButtonVariant } from "../Button/ButtonMarketPlace";
import classes from "./ChipMenuSeller.module.scss"
import classNames from "classnames";

export const ChipMenuSeller = () => {
  const location = useLocation();//  /marketplace-frontend/home-seller/product

  const item =  menuItemsSeller.find((itemSeller:TItems) => {
    if(itemSeller?.links){
      const result = itemSeller.links.find((link) => {
        if(`/${link}` === location.pathname){
          return true
        } // возвращает одинаковый урл
      })
      if(result){
        return true
      }
    }
  })

  if (!item) return null; // если item нету, то не рисуем кнопки


  return (
    <div className={classes.buttomMenu}>
      {item.listMenu?.map((menu) => {
        return (
          <ButtonMarketPlace 
            text={menu.name} 
            key={menu.name} 
            variant={ButtonVariant.outlined}
            borderColorVarian={BorderColorVarian.grey}    
            className = { 
              classNames(location.pathname === `/${menu.url }` && classes. buttomMenu__active)
            }
            to={menu.url}
          />
        )
      })}
    </div>
  );
};