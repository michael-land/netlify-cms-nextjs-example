import { GenericProps } from "@/type";
import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
const AutoPlaySwipeableViews = SwipeableViews;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },

  img: {
    width: "100%",
    display: "block",
    overflow: "hidden"
  },
  stepper: {
    position: "relative",
    top: -32,
    backgroundColor: "transparent"
  },
  buttonsContainer: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "white",
    margin: "0 8px"
  }
}));

interface Carousel extends GenericProps {}

function Carousel({ className, children, ...other }: Carousel) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = React.Children.count(children);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step: number) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {children}
      </AutoPlaySwipeableViews>

      {/* <div className={classes.buttonsContainer}>
        <div className={classes.buttons}>
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className={classes.button}
          >
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className={classes.button}
          >
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
        </div>
      </div> */}
    </div>
  );
}

export default Carousel;
