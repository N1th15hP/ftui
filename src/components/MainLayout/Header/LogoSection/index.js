import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

function LogoSection() {
  const theme = useTheme();
  return (
    <Typography sx={{ color: theme.textColor.default }} variant="h4">
      Ruva
    </Typography>
  );
}

export default LogoSection;
