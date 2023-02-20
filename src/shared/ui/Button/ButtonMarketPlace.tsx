import { Button } from "@mui/material";
import classNames from "classnames";
import { FC, ReactNode } from "react";
import classes from "./ButtonMarketPlace.module.scss";

export enum ButtonVariant {
    // eslint-disable-next-line no-unused-vars
    outlined = "outlined",
    // eslint-disable-next-line no-unused-vars
    contained = "contained",
}

interface IButtonMarketPlaceProps {
    text: string;
    icon?: ReactNode;
    variant?: ButtonVariant;
    className?: string
}

export const ButtonMarketPlace: FC<IButtonMarketPlaceProps> = ({
  text,
  icon,
  variant = ButtonVariant.contained,
  className
}) => {
  return (
    <Button
      className={classNames(
        //  variant === ButtonVariant.outlined ? classes.outlined  : ''
        variant === ButtonVariant.outlined && classes.outlined, 
        className,
        classes.btn
      )}
      variant={variant}
      endIcon={icon}
    >
      {text}
    </Button>
  );
};
