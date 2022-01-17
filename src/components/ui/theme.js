import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0047AB";
const arcOrange = "#FF8C00";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      //enleve le uppercase par defaut
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    estimate: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      textTransorm: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Lato",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Lato",
      color: arcBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
