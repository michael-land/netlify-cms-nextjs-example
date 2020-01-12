import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: { primary: { main: "#000" }, secondary: { main: "rgb(165,35,30)" } },
  nprogress: {
    color: "#000"
  }
});

theme.overrides = {
  MuiAppBar: {
    root: {
      background: "#fff",
      boxShadow: `0px 1px 10px 0px rgba(0,0,0,0.12)`
    }
  },

  MuiCssBaseline: {
    "@global": {
      "#nprogress": {
        direction: "ltr",
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: theme.zIndex.tooltip,
        backgroundColor: "#e0e0e0",
        "& .nprogress-bar": {
          position: "fixed",
          backgroundColor: theme.nprogress.color,
          top: 0,
          left: 0,
          right: 0,
          height: 2
        },
        "& dd, & dt": {
          position: "absolute",
          top: 0,
          height: 2,
          boxShadow: `${theme.nprogress.color} 1px 0 6px 1px`,
          borderRadius: "100%",
          animation: "mui-nprogress-pulse 2s ease-out 0s infinite"
        },
        "& dd": {
          opacity: 0.6,
          width: 20,
          right: 0,
          clip: "rect(-6px,22px,14px,10px)"
        },
        "& dt": {
          opacity: 0.6,
          width: 180,
          right: -80,
          clip: "rect(-6px,90px,14px,-6px)"
        }
      },
      "@keyframes mui-nprogress-pulse": {
        "30%": {
          opacity: 0.6
        },
        "60%": {
          opacity: 0
        },
        to: {
          opacity: 0.6
        }
      }
    }
  }
};
export default theme;

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    nprogress: {
      color: React.CSSProperties["color"];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    nprogress: {
      color?: React.CSSProperties["color"];
    };
  }
}
