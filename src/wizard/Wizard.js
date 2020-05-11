import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextPage,
  previousPage,
  selectCurrentStep,
  selectCanAdvance,
  cantAdvance,
} from "./wizardSlice";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Grid, Container, CssBaseline } from "@material-ui/core/";
// import classes from "*.module.css";
// import styles from "./Counter.module.css";

const useStyles = makeStyles({
  page: {
    display: "grid",
    height: "80vh",
  },
  content: {
    width: "100vw",
    textAlign: "center",
  },
  button: {
    minWidth: "100px",
    width: "20vw",
    margin: "5vw",
  },
});

export function Wizard(props) {
  const classes = useStyles();
  const current_step = useSelector(selectCurrentStep);
  const can_advance = useSelector(selectCanAdvance);
  const dispatch = useDispatch();
  const current_component = React.Children.toArray(props.children)[
    current_step
  ];
  const my_kids = React.Children.toArray(props.children);
  // debugger;
  const validation = current_component.validation;
  console.log("Curr_step: " + current_step + " can advance: " + can_advance);
  let buttons;
  debugger;
  if (current_step === React.Children.count(props.children) - 1) {
    buttons = (
      <button
        className={classes.button}
        onClick={() => dispatch(previousPage())}
      >
        Back
      </button>
    );
  } else {
    buttons = (
      <>
        <button
          className={classes.button}
          onClick={() => dispatch(previousPage())}
        >
          Back
        </button>
        <button
          className={classes.button}
          onClick={() => dispatch(nextPage())}
          disabled={can_advance ? "" : true}
        >
          {current_component.props.forward_label
            ? current_component.props.forward_label
            : "Next"}
        </button>
      </>
    );
  }

  return (
    <React.Fragment className={classes.page}>
      <CssBaseline />
      <div className={classes.content}>{current_component}</div>
      {buttons}
    </React.Fragment>
  );
}
