import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import classes from "./NavBarSeller.module.scss";

interface LinkTabProps {
  to: string;
  label: string;
}

export default function NavBarSeller() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function LinkTab(props: LinkTabProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Tab component={Link} {...props} />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <LinkTab label="Главная" to="" />
          <LinkTab label="Товары" to="product" />
        </Tabs>
      </Box>
    </Box>
  );
}
