import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { Controller, useForm } from "react-hook-form";
import { hasNonEmptyProperties } from "../../utils";
import AlertDialog from "../../components/molecules/AlertDialog";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function ExpenseForm(props) {
  const theme = useTheme();
  const [expenseForm, setExpenseForm] = useState({
    description: "",
    category: "",
    date: null,
    amount: "",
    paymentMethod: "",
  });

  const form = useForm({
    defaultValues: {
      description: "",
      category: "",
      date: null,
      amount: "",
      paymentMethod: "",
    },
  });

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;
  const [categories, setCategories] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const showFullScreenModal = useMediaQuery(theme.breakpoints.down("sm"));
  const [showformNotEmptyAlert, setFormNotEmptyAlert] = useState(false);
  useEffect(() => {
    setCategories([
      "Housing",
      "Transportation",
      "Food",
      "Utilities",
      "Health and Medical",
      "Insurance",
      "Debt Payments",
      "Personal Care",
      "Entertainment and Recreation",
      "Education",
      "Charity and Donations",
      "Miscellaneous",
    ]);

    setPaymentMethod(["UPI", "Cash", "Card-XX24"]);
  }, []);

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;

    hasNonEmptyProperties(expenseForm)
      ? setFormNotEmptyAlert(true)
      : props.handleClose();
  };

  const submit = (data) => {
    console.log(data);
    console.log(expenseForm);
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        maxWidth={showFullScreenModal ? "lg" : "xs"}
        fullScreen={showFullScreenModal}
        fullWidth={true}
      >
        <form onSubmit={handleSubmit(submit)} noValidate>
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            <Box
              sx={{
                m: 0,
                p: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme?.textColor?.default }}
              >
                {`${
                  props.function === "add"
                    ? "Add a new expense"
                    : "Update Expense"
                }`}
              </Typography>
              <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
            </Box>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
              <TextField
                size="small"
                label={"Description"}
                value={expenseForm.description}
                variant="filled"
                {...register("description", {
                  onChange: (e) =>
                    setExpenseForm({
                      ...expenseForm,
                      description: e.target.value,
                    }),

                  required: "Description is required",
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <FormControl fullWidth error={!!errors.category} variant="filled">
                <InputLabel id="category">Category</InputLabel>
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <Select
                      labelId="category"
                      label="Choose an option"
                      {...field}
                      onChange={(e) => {
                        setExpenseForm({
                          ...expenseForm,
                          category: e.target.value,
                        });
                        field.onChange(e.target.value);
                      }}
                    >
                      {categories.map((item, index) => {
                        return (
                          <MenuItem value={item} key={index}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  )}
                />
                {errors.category && (
                  <FormHelperText>{errors.category?.message}</FormHelperText>
                )}
              </FormControl>

              <TextField
                size="small"
                label={"Amount"}
                type="number"
                value={expenseForm.amount}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupeeIcon sx={{ fontSize: 12 }} />
                    </InputAdornment>
                  ),
                }}
                {...register("amount", {
                  required: "Amount is required",
                  onChange: (e) =>
                    setExpenseForm({ ...expenseForm, amount: e.target.value }),
                })}
                variant="filled"
                error={!!errors.amount}
                helperText={errors.amount?.message}
              />
              <Controller
                name="date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      label="Date"
                      value={expenseForm.date}
                      onChange={(date) => {
                        setExpenseForm({ ...expenseForm, date: date });
                        field.onChange(date); // Trigger validation for the field
                      }}
                      slotProps={{
                        textField: {
                          variant: "filled",
                          focused: true,
                          color: "secondary",
                          error: !!errors.date,
                          helperText: errors.date ? errors.date.message : "",
                        },
                      }}
                      format="DD-MM-YYYY"
                    />
                  </LocalizationProvider>
                )}
              />
              <FormControl
                fullWidth
                error={!!errors.paymentMethod}
                variant="filled"
              >
                <InputLabel id="category">Payment Method</InputLabel>
                <Controller
                  name="paymentMethod"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Payment Method is required" }}
                  render={({ field }) => (
                    <Select
                      labelId="paymentMethod"
                      label="paymentMethod"
                      {...field}
                      onChange={(e) => {
                        setExpenseForm({
                          ...expenseForm,
                          paymentMethod: e.target.value,
                        });
                        field.onChange(e.target.value);
                      }}
                    >
                      {paymentMethod.map((item, index) => {
                        return (
                          <MenuItem value={item} key={index}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  )}
                />
                {errors.paymentMethod && (
                  <FormHelperText>
                    {errors.paymentMethod?.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                borderRadius: 10,
              }}
              variant="contained"
              size="small"
              type="submit"
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {showformNotEmptyAlert && (
        <AlertDialog
          confirmButtonText="close"
          cancelButtonText="cancel"
          cancelButtonHandler={() => setFormNotEmptyAlert(false)}
          confirmButtonHandler={props.handleClose}
          title="Heads up!"
          open
        />
      )}
    </>
  );
}

export default ExpenseForm;
