import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"The changes will not be saved. Close anyway?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.cancelButtonHandler}
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
            variant="outlined"
          >
            {props.cancelButtonText}
          </Button>
          <Button
            onClick={props.confirmButtonHandler}
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              borderRadius: 10,
            }}
            variant="contained"
          >
            {props.confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
