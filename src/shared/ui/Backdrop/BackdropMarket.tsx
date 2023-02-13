import React, { ReactNode } from 'react';
import Backdrop from '@mui/material/Backdrop';

interface BackdropProps {
  children: ReactNode;
  isOpen: boolean;
}

export const BackdropMarket = (props: BackdropProps) => {
  const { isOpen, children } = props;
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isOpen}>
      {children}
    </Backdrop>
  );
};
