import React from 'react';
import classes from './Card.module.scss';
import { ReactComponent as Cart } from 'shared/images/icons/cart.svg';
import { ReactComponent as Favorite } from 'shared/images/icons/favorite.svg';

// eslint-disable-next-line react/prop-types
export const Card = ({ obj }) => {
  // eslint-disable-next-line react/prop-types
  const { image, price, fullPrice } = obj;
  const [activeFavorite, setActiveFavorite] = React.useState(false);

  return (
    <div className={classes.cardBlock}>
      <div className={classes.image}>
        <button
          className={classes.favoriteButton}
          onClick={() => setActiveFavorite(!activeFavorite)}
        >
          <Favorite
            fill={activeFavorite ? '#F15513' : 'white'}
            stroke={activeFavorite ? '#F15513' : '#343136'}
          />
        </button>
        <img src={image} />
      </div>
      <div className={classes.title}>Текст текст текст текст текст текст текст текст...</div>
      <div className={classes.priceBlock}>
        <div className={classes.totalPrice}>
          {price} ₽ <span>{fullPrice} ₽</span>
        </div>
        <div>
          <button className={classes.cartButton} onClick={() => setActiveCart(!activeCart)}>
            <Cart />
          </button>
        </div>
      </div>
    </div>
  );
};
