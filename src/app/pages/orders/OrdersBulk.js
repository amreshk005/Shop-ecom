import React from "react";
import { makeStyles } from "@material-ui/core";
import { Paper, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Checkbox, Chip, Select, InputLabel, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFormLabel-root": {
      transform: "translate(25px, 8px) scale(1)",
    },
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  select: {
    padding: "8.5px 58px",
  },
  color: {
    backgroundColor: "rgb(220, 0, 78)",
  },
}));

export default function OrdersBulk() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
