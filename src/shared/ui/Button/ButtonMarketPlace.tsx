import { Button } from "@mui/material";
import classNames from "classnames";
import { FC, ReactNode } from "react";
import classes from "./ButtonMarketPlace.module.scss";
import { Link } from "react-router-dom";

export enum ButtonVariant {
  // eslint-disable-next-line no-unused-vars
  outlined = "outlined",
  // eslint-disable-next-line no-unused-vars
  contained = "contained",
}

export enum BorderColorVarian {
  // eslint-disable-next-line no-unused-vars
  orange = "orange",
  // eslint-disable-next-line no-unused-vars
  grey = "grey",
}

export enum TextColorVarian {
  // eslint-disable-next-line no-unused-vars
  white = "white",
  // eslint-disable-next-line no-unused-vars
  black = "black",
}

interface IButtonMarketPlaceProps {
  text: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  borderColorVarian?: BorderColorVarian;
  textColor?:TextColorVarian;
  className?: string;
  to?: string;
  disable?: boolean;
}

export const ButtonMarketPlace: FC<IButtonMarketPlaceProps> = ({
  text,
  icon,
  variant = ButtonVariant.contained,
  borderColorVarian = BorderColorVarian.orange,
  textColor = TextColorVarian.black,
  className,
  to,
  disable = false,
}) => {
  return (
    <Button
      className={classNames(
        //  variant === ButtonVariant.outlined ? classes.outlined  : ''
        variant === ButtonVariant.outlined && classes.outlined,
        borderColorVarian === BorderColorVarian.grey && classes.greyBorder,
        textColor ===  TextColorVarian.black ? classes.textBlack : classes.textWhite ,
        classes.btn,
        className,
      )}
      variant={variant}
      endIcon={icon}
      component={Link}
      to={`/${to}` || ""}
      disabled={disable}
    >
      {text}
    </Button>
  );
};
