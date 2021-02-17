import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import Profile from "./Sections/Profile";
import Experience from "./Sections/Experience";
import Proficiency from "./Sections/Proficiency";

import { Resume } from "../.ResumeData";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary, ////****WOAH THIS IS IMPORTANT THIS IS HOW TO USE THEMES IN STYLES */
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <br />
        <Grid item xs={12}>
          <Paper variant="outlined" square elevation={10}>
            <Profile />
          </Paper>
        </Grid>
        <br />
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" square elevation={10}>
            <Typography variant="h5">Selected Experience</Typography>
            <br />
            <Experience experience={Resume.experience} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" square elevation={10}>
            <Typography variant="h5">Education</Typography>
            <br />
            <Experience experience={Resume.education} />
          </Paper>
        </Grid>

        <br />

        <Grid item xs={6} md={4}>
          <Paper variant="outlined" square elevation={10}>
            <Typography variant="h5">Programming</Typography>
            <br />
            <Proficiency list={Resume.languages} />
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper variant="outlined" square elevation={10}>
            <Typography variant="h5">Skills</Typography>
            <br />
            <Proficiency list={Resume.languages} />
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper variant="outlined" square elevation={10}>
            <Typography variant="h5">Skills</Typography>
            <br />
            <Proficiency list={Resume.languages} />
          </Paper>
        </Grid>
        <br />
        {/* <br /> !! */}
        <br />
      </Grid>
      <br />
    </Container>
  );
}
