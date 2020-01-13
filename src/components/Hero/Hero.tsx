import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { GenericProps } from "@/type";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundImage: "linear-gradient(rgba(0,0,0,0.2) 0%,rgba(0,0,0,.4) 75%,rgba(0,0,0,.6) 100%)"
  },
  image: {
    backgroundColor: "#222",
    height: "calc(100vh - 64px - 64px)",
    [theme.breakpoints.down("md")]: {
      height: "calc(100vh - 64px)"
    },
    position: "relative",
    maxHeight: "80vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  children: {
    zIndex: 2,
    position: "absolute"
  },
  anchorcenter: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  anchorbottom: {
    bottom: 0,
    left: 0,
    right: 0
  }
}));

interface Hero extends GenericProps {
  image: string;
  anchor?: "center" | "bottom";
}

const Hero = React.memo<Hero>(function Hero({ children, image, anchor, ...other }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }}>
        {children && (
          <div
            className={clsx(classes.children, {
              [(classes as any)[`anchor${anchor}`]]: anchor
            })}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
});

export default Hero;
