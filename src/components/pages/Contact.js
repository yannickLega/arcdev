import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonArrow from "../ui/ButtonArrow";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Typography,
  Grid,
  Button,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 300,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  //spinner state
  const [loading, setLoading] = useState(false);

  //snackbar state
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  //gestion des erreurs
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email ex: pierre.paul@jacques.fr");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid Phone Number ex: 0612345678");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  //axios confirm func pour envoyer message
  const onConfirm = () => {
    setLoading(true);
    axios
      .get("https://us-central1-arcdev-dd519.cloudfunctions.net/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4bb543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Oups, something went wrong, please try again ! ",
          backgroundColor: "#ff3232",
        });
      });
  };

  const buttonContents = (
    <>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </>
  );

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : undefined,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    // permet d'appeller le numero sur mobile
                    href="tel:0612345678"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    06 12 34 56 78
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    // permet d'ouvrir le gestionnaire de mail sur mobile ou ordi
                    href="mailto:yannick.lega@yahoo.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    yannick.lega@yahoo.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                placeholder="your message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                multiline
                rows={10}
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                fullWidth
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phoneHelper.length !== 0 ||
                  phone.length === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            padding: matchesXS
              ? "1em 0"
              : matchesSM
              ? "5em 5em"
              : matchesMD
              ? "5em 10em"
              : "5em 20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                id="email"
                value={email}
                onChange={onChange}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                id="phone"
                value={phone}
                onChange={onChange}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchesXS ? "100vw" : "20em" }}>
            <TextField
              placeholder="your message"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline
              rows={10}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phoneHelper.length !== 0 ||
                  phone.length === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software <br /> Revolutionary Results
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of the 21st Century
              </Typography>
              <Grid container item direction={matchesMD ? "column" : undefined}>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
