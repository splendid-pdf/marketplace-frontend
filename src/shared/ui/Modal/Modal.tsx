import React, { ReactNode } from "react";
import classes from "./Modal.module.scss";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import { Fade, Typography, Backdrop, Modal as ModalMUI } from "@mui/material";
import { ReactComponent as CloseIcon } from "shared/images/icons/closeIcon.svg";
import { relative } from "path";

interface ModalProps {
  title: string;
  isOpened: boolean;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpened, title }) => {
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
        <Box className={classes.modal} >
          <CloseIcon className={classes.iconClose} onClick={navigateBack} />
          <Typography variant="h5" className={classes.typography} id="modal-modal-title">
            {title}
          </Typography>
          <div className={classes.childrenWrapper}>{children}</div>
        </Box>
      </Fade>
    </ModalMUI>
  );
};
