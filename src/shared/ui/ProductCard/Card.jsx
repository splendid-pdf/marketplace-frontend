import React from "react";
import classes from "./Card.module.scss";
import { ReactComponent as Cart } from "shared/images/icons/cart2.svg";
import { ReactComponent as FavoriteIcon } from "../../images/icons/heart.svg";

// eslint-disable-next-line react/prop-types
export const Card = ({ obj, hideCartButton = false }) => {
  // eslint-disable-next-line react/prop-types
  const { image, price, title } = obj;
  const [activeFavoriteIcon, setActiveFavoriteIcon] = React.useState(false);

  return (
    <div className={classes.cardBlock}>
      <div className={classes.image}>
        <button
          className={classes.favoriteButton}
          onClick={() => setActiveFavoriteIcon(!activeFavoriteIcon)}
        >
          <FavoriteIcon
            fill={activeFavoriteIcon ? "#F15513" : "#EFEFEF"}
            stroke={activeFavoriteIcon ? "#" : "#343631"}
          />
        </button>

        <div className={classes.wrap}>
          {!hideCartButton && (
            <button className={classes.cartButton}>
              <Cart />
            </button>
          )}

          <img src={image} />
        </div>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.priceBlock}>
        <div className={classes.totalPrice}>{price} ₽</div>
      </div>
    </div>
  );
};
