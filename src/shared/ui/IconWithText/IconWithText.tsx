import Grid from "@mui/material/Grid";
import { FC, ReactNode } from "react";
import styles from './IconWithText.module.scss'

interface IIconProps {
    icon: ReactNode;
    text: string;
}

export const IconWithText: FC<IIconProps> = ({icon,text}) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid className={styles.iconWithText__icon} item>{icon}</Grid>
      <Grid item>{text}</Grid>
    </Grid>
  );
};
