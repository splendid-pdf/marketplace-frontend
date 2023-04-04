import React, { ReactNode } from "react";
import classes from "./Modal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import { Fade, Typography, Backdrop, Modal as ModalMUI } from "@mui/material";
import { ReactComponent as CloseIcon } from "shared/images/icons/closeIcon.svg";
import { relative } from "path";

export enum SizeVariantModal{
  popularSize = 'popularSize',
  differentSize = 'differentSize'
}

export enum PaddingVariantModal{
  popularPadding = 'popularPadding',
  differentPadding = 'differentPadding'
}

export enum BorderRadiusVariantModal{
  popularBorderRadius = 'popularBorderRadius',
  differentBorderRadius = 'differentBorderRadius'
}

export enum StyleTextVariantModal{
  popularStyleText = 'popularStyleText',
  differentStyleText = 'differentStyleText'
}

interface ModalProps {
  title: string;
  isOpened: boolean;
  children: ReactNode;
  widthModal?:SizeVariantModal;
  paddingModal?:PaddingVariantModal;
  borderModal?:BorderRadiusVariantModal;
  textStyle?:StyleTextVariantModal;
}

export const Modal: React.FC<ModalProps> = ({
  children, 
  isOpened, 
  title, 
  widthModal = SizeVariantModal.popularSize,
  paddingModal = PaddingVariantModal.popularPadding,
  borderModal = BorderRadiusVariantModal.popularBorderRadius,
  textStyle = StyleTextVariantModal.popularStyleText
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    navigate(location.pathname);
  };

  return (
    <ModalMUI
      open={isOpened}
      onClose={navigateBack}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      aria-labelledby="modal-modal-title"
      // sx={{ zIndex: 2000}}
    >
      <Fade in={isOpened}>
        {/* <Box className={classes.modal} > */}
        <Box className={classNames(
          widthModal ===  SizeVariantModal.popularSize
            ? 
            classes.popularSize 
            : 
            classes.differentSize ,
          paddingModal === PaddingVariantModal.popularPadding
            ?
            classes.popularPadding
            :
            classes.differentPadding,
          borderModal === BorderRadiusVariantModal.popularBorderRadius
            ?
            classes.popularBorderRadius
            :
            classes.differentBorderRadius,
          classes.modal
        )} >
          <CloseIcon className={classes.iconClose} onClick={navigateBack} />
          <Typography
            variant="h5" 
            className={textStyle === StyleTextVariantModal.popularStyleText
              ?
              classes.popularStyleText
              :
              classes.differentStyleText} 
            id="modal-modal-title">
            {title}
          </Typography>
          <div className={classes.childrenWrapper}>{children}</div>
        </Box>
      </Fade>
    </ModalMUI>
  );
};
