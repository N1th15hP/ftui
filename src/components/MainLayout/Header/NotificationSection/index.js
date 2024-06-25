import { Avatar, Box, ButtonBase, useTheme } from "@mui/material";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function NotificationSection() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down("md")]: {
            mr: 2,
          },
        }}
      >
        <ButtonBase sx={{ borderRadius: "10px", overflow: "hidden" }}>
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
          >
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: 22, color: theme.textColor.default }}
            />
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
}

export default NotificationSection;
