/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  textColor: {
    color: "#fff",
  },
}));

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url) ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open menu-item-not-hightlighted` : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive("/dashboard", false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive("/builder", false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Layout Builder</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive("/user-profile", false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/user-profile">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")} />
            </span>
            <span className="menu-text">User Profile</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive("/user-settings", false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/user-settings">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Settings.svg")} />
            </span>
            <span className="menu-text">User Settings</span>
          </NavLink>
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" className={classes.textColor} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} component={RouterLink} to="/order-pay">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Order Pay" className={classes.textColor} />
                </ListItem>
<<<<<<< HEAD
                <ListItem button className={classes.nested} component={RouterLink} to="/order-continue">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Order Continue" className={classes.textColor} />
=======
                <ListItem button className={classes.nested} component={RouterLink} to="/order-bulk">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Order Bulk" className={classes.textColor} />
                </ListItem>
                <ListItem button className={classes.nested} component={RouterLink} to="/order-models">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Orders Models" className={classes.textColor} />
>>>>>>> 5e341129c13cb99d8e66a706d653f02a43a5e76e
                </ListItem>
              </List>
            </Collapse>
          </List>
        </li>
      </ul>
    </>
  );
}
