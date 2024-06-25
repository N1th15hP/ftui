import { MenuItem, Select } from "@mui/material";
import React from "react";

function SelectInput() {
  return (
    <Select
      value={""} // Set the selected value
      sx={{
        width: 100, // Custom width
        height: 40, // Custom height
        "& .MuiSelect-select": {
          minHeight: "unset", // Reset the minimum height
          lineHeight: "unset", // Reset the line height
        },
      }}
    >
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </Select>
  );
}

export default SelectInput;
