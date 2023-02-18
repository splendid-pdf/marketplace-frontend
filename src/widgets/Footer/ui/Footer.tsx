import React from 'react';
import PublicFooter from './publicFooter/PublicFooter';
import classes from './Footer.module.scss';
import BottomFooter from './bottomFooter/BottomFooter';
import SellerFooter from './sellerFooter/SellerFooter';


export const Footer: React.FC = () => {

  return (
    <div className={classes.Footer}>
      <PublicFooter/>
      {/* <SellerFooter/> */}
      <BottomFooter/>
    </div>
      
  );
};


