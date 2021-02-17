import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import GettingStarted from "./GettingStarted";
import Fab from "@material-ui/core/Fab";

import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FolderIcon from "@material-ui/icons/Folder";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import headshot from "../../img/headshot.jpg";

const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 25,
    width: theme.spacing(24),
    height: theme.spacing(24),
    boxShadow: theme.shadows[10],
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  LinkedInIcon: {
    backgroundColor: "#2867B2",
    margin: 3,
  },

  MailIcon: {
    backgroundColor: "#EA4335",
    margin: 3,
  },
  GitHubIcon: {
    backgroundColor: "#24292e",
    margin: 3,
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Box height="100%" className={classes.root}>
      <div className={classes.root}>
        <Box display="flex" flexWrap="wrap" flexDirection="row">
          <div>
            <Avatar src={headshot} className={classes.avatar} elevation={6} />
          </div>

          <div style={{ flexGrow: 1 }}>
            <Typography variant="h4">Frank Meyer</Typography>
            <Typography variant="h6">
              {/* Project Manager | Business System Analyst | Manufacturing Engineer */}
              im good at stuff whatever
            </Typography>
            {/* <iframe src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=42.92954,50.51405&zoom=12`} height={200} width={200}/> */}
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Impact XM" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="New York Metropolitan Area" />
              </ListItem>
            </List>
          </div>
          <div>
            <Box display="flex" flexDirection="column">
              <Fab
                size="medium"
                color="primary"
                aria-label="send me a message"
                className={classes.MailIcon}
              >
                {/* <NavigationIcon className={classes.extendedIcon} /> */}
                <MailIcon />
              </Fab>
              <Fab
                size="medium"
                color="primary"
                aria-label="go to my linked in"
                href="https://www.linkedin.com/in/frank-meyer-9b49b020/"
                className={classes.LinkedInIcon}
              >
                {/* <NavigationIcon className={classes.extendedIcon} /> */}
                <LinkedInIcon />
              </Fab>
              <Fab
                size="medium"
                color="primary"
                aria-label="visit me on github"
                className={classes.GitHubIcon}
                href="https://github.com/dontfrankout"
              >
                {/* <NavigationIcon className={classes.extendedIcon} /> */}
                <GitHubIcon />
              </Fab>
            </Box>
          </div>
        </Box>
      </div>
    </Box>
  );
}
