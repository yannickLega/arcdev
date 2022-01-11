import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0047AB";
const arcOrange = "#FF8C00";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      //enleve le uppercase par defaut
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransorm: "none",
      color: "white",
    },
  },
});
