
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, MenuItem, makeStyles } from "@material-ui/core";
import { signInHeader } from "../../constants/headerConstants";
import MenuIcon from "@material-ui/icons/Menu";
import { SET_DRAWER_OPEN } from "../../constants/actionTypes";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    maxWidth: 160,
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
}));



const Header = (props) => {
  const { mobileView, drawerOpen, dispatch } = props;
  const { header, logo, menuButton, toolbar } = useStyles();

  const gandiesAndBlackLogo = (
    <>
      <img src="https://gnblist.com/assets/images/newlogo1.png" alt="Gandy & Black" className={logo} />
    </>
  );

  const getMenuButtons = () => {
    return signInHeader.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "#7984a3",
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const getDrawerChoices = () => {
    return signInHeader.map(({ label, href }) => {
      return (
        // <Link
        //   {...{
        //     component: RouterLink,
        //     to: href,
        //     color: "inherit",
        //     style: { textDecoration: "none" },
        //     key: label,
        //   }}
        // >
          <MenuItem>{label}</MenuItem>
        // </Link>
      );
    });
  };

  const displayDesktop = () => {


    return <Toolbar className={toolbar}>
      {gandiesAndBlackLogo}
      <div>{getMenuButtons()}</div>
    </Toolbar>;
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      dispatch({
        type: SET_DRAWER_OPEN,
        payload: true
      })
    }
    const handleDrawerClose = () => {
      dispatch({
        type: SET_DRAWER_OPEN,
        payload: false
      })
    }
    return (
      <Toolbar className={header}>
        <IconButton
          {...{
            edge: "start",
            color: "black",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <div>{gandiesAndBlackLogo}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;