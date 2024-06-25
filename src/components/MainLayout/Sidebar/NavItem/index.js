import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { forwardRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { MENU_OPEN, SET_MENU } from "../../../../store/action";

function NavItem({ item, level }) {
  const theme = useTheme();
  const pathname = useLocation();
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon sx={{ fontSize: 20 }} size="small" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: 6,
        height: 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
  }, [pathname]);
  return (
    <>
      <ListItemButton
        {...listItemProps}
        disabled={item.disabled}
        sx={{
          borderRadius: `10px`,
          mb: 0.5,
          alignItems: "flex-start",
          backgroundColor: level > 1 ? "transparent !important" : "inherit",
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
        onClick={() => itemHandler(item.id)}
      >
        {" "}
        <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant={
                customization.isOpen.findIndex((id) => id === item.id) > -1
                  ? "h5"
                  : "body1"
              }
              color="inherit"
              sx={{ my: "auto", fontSize: 15 }}
            >
              {item.title}
            </Typography>
          }
          secondary={
            item.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom
              >
                {item.caption}
              </Typography>
            )
          }
        />
      </ListItemButton>
    </>
  );
}

export default NavItem;
