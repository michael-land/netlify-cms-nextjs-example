import nprogress from "nprogress";
import React from "react";
import {
  CssBaseline,
  MuiThemeProvider,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { Anchor, Logo } from "@/components";
import MenuIcon from "@material-ui/icons/Menu";
import { AppProps } from "next/app";
import Router from "next/router";
import theme from "@/theme";
import { useBoolean } from "react-use";

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => {
  nprogress.done();
  window.scrollTo(0, 0);
});

Router.events.on("routeChangeError", () => nprogress.done());

const useStyles = makeStyles(theme => ({
  navigation: {
    justifyContent: "center",
    overflowX: "auto"
  },
  children: {
    marginTop: 64 + 48,
    [theme.breakpoints.down("md")]: {
      marginTop: 64
    }
  }
}));

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [open, toggle] = useBoolean(false);
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="inherit" position="static">
        <Toolbar variant="dense">
          <Hidden lgUp implementation="css">
            <IconButton onClick={toggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Logo />
        </Toolbar>
        <Hidden mdDown implementation="css">
          <Toolbar variant="dense" className={classes.navigation}></Toolbar>
        </Hidden>
      </AppBar>

      <Component {...pageProps} />
    </MuiThemeProvider>
  );
};

export default App;
