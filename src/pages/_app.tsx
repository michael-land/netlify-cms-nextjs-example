import { Anchor, Logo } from "@/components";
import routes from "@/routes";
import theme from "@/theme";
import { GenericProps } from "@/type";
import {
  AppBar,
  Box,
  CssBaseline,
  Hidden,
  IconButton,
  makeStyles,
  MuiThemeProvider,
  Slide,
  Toolbar,
  useScrollTrigger
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AppProps } from "next/app";
import Router from "next/router";
import nprogress from "nprogress";
import React from "react";
import { useBoolean } from "react-use";

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => {
  nprogress.done();
  window.scrollTo(0, 0);
});

Router.events.on("routeChangeError", () => nprogress.done());

const useStyles = makeStyles(theme => ({
  logo: {
    maxHeight: 40,
    [theme.breakpoints.down("md")]: {
      maxHeight: 30
    },
    top: 13,
    width: "auto",
    position: "absolute",
    left: 0,
    right: 0
  },
  menuIcon: {
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
    marginRight: 8
  },
  paper: {
    padding: theme.spacing(1),
    minWidth: 500,
    maxWidth: "100%",
    minHeight: 200
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  icon: {
    marginRight: 16
  },
  appbar: {
    background: "#fff",
    boxShadow: `0px 1px 10px 0px rgba(0,0,0,0.12)`
  },
  footer: {
    marginTop: "auto",
    borderTop: `${theme.spacing(6)}px solid transparent`,
    padding: theme.spacing(3, 0)
  },
  navigation: {
    justifyContent: "center",
    overflowX: "auto"
  },
  activeLink: {
    color: theme.palette.secondary.main,
    fontWeight: 500
  },
  toolbarLink: {
    padding: theme.spacing(1),
    "&:first-child": {
      paddingLeft: 0
    },
    "&:last-child": {
      paddingRight: 0
    }
  },
  children: {
    marginTop: 64 + 48,
    [theme.breakpoints.down("md")]: {
      marginTop: 64
    }
  }
}));

const Root = React.memo<GenericProps>(({ children }) => {
  const [open, toggle] = useBoolean(false);
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 512
  });

  const navigation = (
    <Box display="flex" color="black">
      {routes.map(({ title, children, href }) => (
        <Anchor
          variant="subtitle1"
          activeClassName={classes.activeLink}
          aria-haspopup="true"
          style={{ margin: "0 12px" }}
          color="inherit"
          href={href || "#"}
          key={title}
        >
          {title}
        </Anchor>
      ))}
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Hidden lgUp implementation="css">
            <IconButton className={classes.menuIcon} onClick={toggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Anchor href="/">
            <img
              className={classes.logo}
              src="/static/uploads/logo-black.jpg"
              alt="xiangshang-lot-logo"
            />
          </Anchor>
        </Toolbar>
        <Hidden mdDown implementation="css">
          <Toolbar className={classes.navigation}>{navigation}</Toolbar>
        </Hidden>
      </AppBar>

      <Slide appear={trigger} direction="down" in={trigger}>
        <AppBar className={classes.appbar}>
          <Toolbar style={{ display: "flex" }}>
            <IconButton className={classes.menuIcon} onClick={toggle}>
              <MenuIcon />
            </IconButton>
            <Anchor href="/">
              <img
                style={{
                  maxHeight: 40,
                  marginLeft: 16
                }}
                src="/static/uploads/logo-black.jpg"
                alt="xiangshang-lot-logo"
              />
            </Anchor>
            <Box ml="auto">
              <Hidden mdDown implementation="css">
                {navigation}
              </Hidden>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <main>{children}</main>
      {/* <Footer />
      <SideNavigation
        disablePermanent
        routes={flatten(routes)}
        open={drawerOpen}
        onClose={toggleDrawer}
      /> */}
    </React.Fragment>
  );
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Root>
        <Component {...pageProps} />
      </Root>
    </MuiThemeProvider>
  );
};

export default App;
