import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { DataGrid } from "@mui/x-data-grid";
import { coldef } from "./coldef";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ButtonDatePicker from "../../components/atoms/ButtonDatePicker";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PieChart, useDrawingArea } from "@mui/x-charts";
import NoGridDataOverlay from "../../components/atoms/NoGridDataOverlay";
import ExpenseForm from "./ExpenseForm";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
function Expenses() {
  const theme = useTheme();
  const getCurrentMonthFirstDate = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  };

  const size = {
    width: 300,
    height: 300,
  };

  const [value, setValue] = useState(dayjs(getCurrentMonthFirstDate()));
  const [rowData, setRowData] = useState([
    {
      category: "Utilities",
      date: "2024-06-16",
      paymentMethod: "upi",
      description: "Electricity",
      amount: 7496,
    },
  ]);

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h6" sx={{ color: theme?.textColor?.default }}>
          Expenses
        </Typography>

        <Stack spacing={1} direction="row" alignItems="center">
          <Typography sx={{ ...theme?.typography?.content }}>
            Your expenses for{" "}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ButtonDatePicker
              label={value == null ? null : value.format("MM/DD/YYYY")}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Stack>
      </Box>
      <Grid container columns={16} spacing={2}>
        <Grid
          xs={16}
          md={rowData.length > 0 ? 12 : 16}
          lg={rowData.length > 0 ? 12 : 16}
          order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
        >
          <Stack direction="row-reverse" sx={{ mb: 1 }}>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                borderRadius: 10,
              }}
              variant="contained"
              size="small"
              onClick={() => setShowExpenseForm(true)}
            >
              Add Expense
            </Button>
          </Stack>
          <div style={{ width: "100%" }}>
            <div style={{ height: 490, width: "100%" }}>
              <DataGrid
                columnVisibilityModel={{
                  id: false,
                }}
                slots={{
                  noRowsOverlay: NoGridDataOverlay,
                }}
                columns={coldef}
                sx={{
                  "& .MuiDataGrid-columnHeader": {
                    color: theme?.textColor?.gridHeader, // Change font color of column headers
                  },
                }}
                rows={rowData}
                getRowId={(row, index) => row.description + row.id}
              />
            </div>
          </div>
        </Grid>
        {rowData.length > 0 && (
          <Grid xs={16} md={4} lg={4} order={{ xs: 1, sm: 1, md: 2, lg: 2 }}>
            <Box sx={{ height: 200, width: "100%" }}>
              <PieChart
                colors={["red", "blue", "green"]} // Use palette
                sx={{
                  p: 2,
                  ml: 12,
                }}
                series={[
                  {
                    data: [
                      { value: 10 }, // Use color property
                      { value: 20 }, // Use color property
                      { value: 60 }, // Use color property
                      { value: 40 }, // Use color property
                      // ...
                    ],
                    innerRadius: 80,
                    highlightScope: { faded: "global", highlighted: "item" },
                  },
                ]}
                {...size}
              >
                <PieCenterLabel>Total : 4.89k</PieCenterLabel>
              </PieChart>
            </Box>
          </Grid>
        )}
      </Grid>
      {showExpenseForm && (
        <ExpenseForm
          open={showExpenseForm}
          handleClose={() => setShowExpenseForm(false)}
          function="add"
        />
      )}
    </>
  );
}

export default Expenses;
