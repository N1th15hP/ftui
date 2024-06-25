import { useTheme } from "@emotion/react";
import { Avatar, Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import LogoSection from "./LogoSection";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationSection from "./NotificationSection";

function Header({ handleLeftDrawerToggle }) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 190,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <ButtonBase>
            <LogoSection />
          </ButtonBase>
        </Box>
      </Box>
      <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <Avatar
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: "all .2s ease-in-out",
            background: `rgba(1, 201, 160, 0.08)`,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light, // Change to your desired hover color
            },
            color: theme.palette.primary.default,
          }}
          variant="rounded"
          color="inherit"
          onClick={handleLeftDrawerToggle}
        >
          <MenuIcon sx={{ fontSize: 22, color: theme.textColor.default }} />
        </Avatar>
      </ButtonBase>
      <Box sx={{ flexGrow: 1 }} />
      <NotificationSection />
    </>
  );
}

export default Header;
