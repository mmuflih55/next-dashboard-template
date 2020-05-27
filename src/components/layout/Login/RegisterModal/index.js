import React from "react";
import { withStyles } from "@material-ui/core/styles";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Typography, Dialog, Button } from "@material-ui/core";
import { useModal } from "~/context/ModalContext";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, open = false, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function RegisterModal(props) {
  const [state, setState] = React.useState({ username: "", password: "" });
  const [modalState, dispatch] = useModal();

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // let regis = auth
    //   .createUserWithEmailAndPassword(state.email, state.password)
    //   .then((regis) => {
    //     console.log("regis");
    //     console.log(regis);
    //     let resp = auth
    //       .signInWithEmailAndPassword(state.email, state.password)
    //       .then((s) => {
    //         console.log("login");
    //         console.log(s);
    //       })
    //       .catch(function (error) {
    //         // var errorCode = error.code;
    //         var errorMessage = error.message;
    //         if (errorMessage) alert(errorMessage);
    //       });
    //   })
    //   .catch(function (error) {
    //     var errorMessage = error.message;
    //     if (errorMessage) alert(errorMessage);
    //   });
  };

  const handleClickOpen = () => {
    dispatch({ type: "openModal" });
  };
  const handleClose = () => {
    dispatch({ type: "closeModal" });
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modalState.open}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Register Account
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button autoFocus type="submit" color="primary">
              Register
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
