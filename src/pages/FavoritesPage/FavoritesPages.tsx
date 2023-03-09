import classes from './FavoritesPage.module.scss';
import React, { useState } from 'react';

import "../../shared/fonts/Manrope/static/Manrope-Bold.ttf";
import { test, test2 } from './testFakeData';
import FavoriteCard from 'shared/ui/FavoriteCard/FavoriteCard';

interface Card {
  id: number;
  title: string;
  image: string;
  price?: string;
}

const FavoritesPage = () => {

  const [favoriteProducts, setFavoriteProducts] = useState<Card[]>(test);
  const [countProducts, setCountProducts] = useState<number>(test.length);

  const handleFavoriteChange = (card: Card, isFavorite: boolean) => {
    if (isFavorite) {
      setFavoriteProducts([...favoriteProducts, card]);
      setCountProducts(countProducts + 1);
    } else {
      setFavoriteProducts(
        favoriteProducts.filter((p) => p.id !== card.id)
      );
      setCountProducts(countProducts - 1);
    }
  };



  const [favoriteShops, setFavoriteShops] = useState<Card[]>(test2);
  const [countShops, setCountShops] = useState<number>(test2.length);

  const handleFavoriteShopChange = (card: Card, isFavorite: boolean) => {
    if (isFavorite) {
      setFavoriteShops([...favoriteShops, card]);
      setCountShops(countShops + 1);
    } else {
      setFavoriteShops(
        favoriteShops.filter((p) => p.id !== card.id)
      );
      setCountShops(countShops - 1);
    }
  };



  const getProductText = (count: number) => {
    if (count === 1) {
      return 'товар';
    } else if (count > 1 && count < 5) {
      return 'товара';
    } else {
      return 'товаров';
    }
  };

  const getShopText = (count: number) => {
    if (count === 1) {
      return 'магазин';
    } else if (count > 1 && count < 5) {
      return 'магазина';
    } else {
      return 'магазинов';
    }
  };



  return (
    <div className={classes.FavoritesPage}>
      <div className={classes.FavoriteProducts}>
        <div className={classes.ProductsHeader}>
          <h2 className={classes.HeaderTitle}>Избранные товары</h2>
          <p className={classes.HeaderText}>
            {countProducts} {getProductText(countProducts)}
          </p>
        </div>
        <div className={classes.ProductsTable}>
          {favoriteProducts.map((item) => (
            <FavoriteCard
              obj={item} 
              key={item.id} 
              onFavoriteChange={handleFavoriteChange}
              isProductCard={true}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className={classes.FavoriteShops}>
        <div className={classes.ShopsHeader}>
          <h2 className={classes.HeaderTitle}>Избранные магазины/бренды</h2>
          <p className={classes.HeaderText}>
            {countShops} {getShopText(countShops)}
          </p>
        </div>
        <div className={classes.ShopsTable}>
          {favoriteShops.map((item) => (
            <FavoriteCard
              obj={item} 
              key={item.id} 
              onFavoriteChange={handleFavoriteShopChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;