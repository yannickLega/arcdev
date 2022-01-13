import React from "react";

import About from "./About";
import Contact from "./Contact";
import Customsoftware from "./Customsoftware";
import Estimate from "./Estimate";
import MobileApps from "./MobileApps";
import Revolution from "./Revolution";
import Services from "./Services";
import Websites from "./Websites";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  mainContainer: {
    marginTop: "4em",
    marginBottom: "4em",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="center"
        className={classes.mainContainer}
        spacing={4}
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1617691763432-8b45e6748b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <About />
        </Grid>
        <Grid item>
          <Services />
        </Grid>
        <Grid item>
          <Contact />
        </Grid>
        <Grid item>
          <Customsoftware />
        </Grid>
        <Grid item>
          <Estimate />
        </Grid>
        <Grid item>
          <MobileApps />
        </Grid>
        <Grid item>
          <Revolution />
        </Grid>
        <Grid item>
          <Websites />
        </Grid>
      </Grid>
    </>
  );
}
