import React from "react";
import classes from "./FavoriteCard.module.scss";
import { ReactComponent as Cart } from "shared/images/icons/cart2.svg";
import { ReactComponent as FavoriteIcon } from "shared/images/icons/heart.svg";


interface Card {
  id: number;
  title: string;
  image: string;
}

interface FavoriteCardProps {
  obj: Card;
  onFavoriteChange: (card: Card, isFavorite: boolean) => void;
  isProductCard?: boolean;
  price?: string;
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({ 
  obj, onFavoriteChange, isProductCard, price 
}) => {

  const { id, image, title } = obj;
  const [isFavorite, setIsFavorite] = React.useState(true);

  const handleFavoriteChange = () => {
    setIsFavorite(false);
    setTimeout(() => {
      onFavoriteChange(obj, false);
    }, 1000);
  };

  const renderImage = () => (
    <div className={classes.image}>
      <button className={classes.favoriteButton} onClick={handleFavoriteChange}>
        <FavoriteIcon 
          fill={isFavorite ? "#F15513" : "#EFEFEF"} 
          stroke={isFavorite ? "#" : "#343631"} 
        />
      </button>
      <div className={classes.wrap}>
        {isProductCard && (
          <button className={classes.cartButton}>
            <Cart />
          </button>
        )}
        <img src={image} />
      </div>
    </div>
  );

  const renderTitle = () => <div className={classes.title}>{title}</div>;

  const renderPrice = () => (
    <div className={classes.priceBlock}>
      <div className={classes.totalPrice}>{price} ₽</div>
    </div>
  );

  return (
    <div className={classes.cardBlock}>
      {renderImage()}
      {renderTitle()}
      {isProductCard && renderPrice()}
    </div>
  );
};

export default FavoriteCard;