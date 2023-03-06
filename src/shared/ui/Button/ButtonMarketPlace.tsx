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

interface IButtonMarketPlaceProps {
  text: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  borderColorVarian?: BorderColorVarian;
  className?: string;
  to?: string;
}

export const ButtonMarketPlace: FC<IButtonMarketPlaceProps> = ({
  text,
  icon,
  variant = ButtonVariant.contained,
  borderColorVarian = BorderColorVarian.orange,
  className,
  to,
}) => {
  return (
    <Button
      className={classNames(
        //  variant === ButtonVariant.outlined ? classes.outlined  : ''
        variant === ButtonVariant.outlined && classes.outlined,
        borderColorVarian === BorderColorVarian.grey && classes.greyBorder,
        className,
        classes.btn,
      )}
      variant={variant}
      endIcon={icon}
      component={Link}
      to={`/${to}` || ""}
    >
      {text}
    </Button>
  );
};
