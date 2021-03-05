import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProjectCard from "../Components/ProjectCard";

const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },
  card: {
    maxWidth: 345,
  },

  box: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function Projects(props) {
  const classes = useStyles();

  return (
    <Box height="100%" className={classes.root}>
      <div className={classes.root}>
        <Box display="flex" flexWrap="wrap" flexDirection="column">
          <Typography variant="h5" className={classes.title}>
            Selected Projects
          </Typography>
          <Typography variant="subtitle1" className={classes.title}>
            Click any project to see more detail. Some of my coolest work can't
            be displayed publically, so reach out if you want to hear more.
          </Typography>
        </Box>

        <div className={classes.root}>
          <Grid container spacing={3}>
            {props.projects.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <ProjectCard project={item}/>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Box>
  );
}
