import { useState } from "react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";
import { TItems } from "shared/constants/seller_menu";
import classes from "./DropdownMenu.module.scss";
import classNames from "classnames";

interface DropdownMenuProps {
  item: TItems;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const open = Boolean(anchorEl);
  const page = item.listMenu?.find((el) => {
    if(`/${el.url }`=== location.pathname){
      return true
    }
  });


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openDropdown = (event: React.MouseEvent<any, any>) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        component={Link}
        to={item.url}
        onMouseOver={openDropdown}
        onClick={handleClose}
        style={{ 
          // zIndex: 2000, 
          backgroundColor: "white" 
        }}
        className={classNames(location.pathname === `/${page?.url}` && classes.bold)}
      >
        {item.name}
      </Button>
      {item.listMenu?.length && location.pathname !== `/${page?.url}` ? (
        <Menu
          PaperProps={{
            style: {
              borderRadius: "20px",
              boxShadow: "none",
              border: "1px solid #ECECEC",
              marginTop: "6px",
            },
          }}
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onMouseLeave={handleClose}
          keepMounted={true}
        >
          {item.listMenu?.map((item, index) => {
            return <Link className={classes.link} key={index} to={item.url || ''}>
              <MenuItem >{item.name}</MenuItem>
            </Link>;
          })}
        </Menu>
      ) : (
        ""
      )}
    </>
  );
};
