import * as React from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function ButtonField(props) {
  const theme = useTheme();
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { "aria-label": ariaLabel } = {},
  } = props;

  const dateLabel = new Date(label);

  return (
    <>
      <Stack direction="row" alignItems="center">
        <Typography sx={{ ...theme?.typography?.content }}>
          {label
            ? `${dateLabel.toLocaleString("default", {
                month: "long",
              })}
          ${dateLabel.getFullYear()}`
            : "Select the month"}
        </Typography>
        <IconButton
          //color="secondary"
          //variant="outlined"
          id={id}
          disabled={disabled}
          ref={ref}
          aria-label={ariaLabel}
          onClick={() => setOpen?.((prev) => !prev)}
          size="small"
          sx={{ marginLeft: { xs: "18px", md: "0px" } }}
        >
          <CalendarMonthIcon />
        </IconButton>
      </Stack>
    </>
  );
}

function ButtonDatePicker(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      views={["month", "year"]}
    />
  );
}

export default ButtonDatePicker;
