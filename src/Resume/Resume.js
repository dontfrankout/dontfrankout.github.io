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
import Projects from "./Sections/Projects";

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
  title: {
    margin: 5,
    padding: 5,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <br />
        <Grid item xs={12}>
          <Paper variant="outlined" square>
            <Profile profile={Resume.profile} />
          </Paper>
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Selected Experience
            </Typography>

            <Experience experience={Resume.experience} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" squar>
            <Typography variant="h5" className={classes.title}>
              Education
            </Typography>

            <Experience experience={Resume.education} />
          </Paper>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} md={4}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Management
            </Typography>

            <Proficiency list={Resume.management} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Technical
            </Typography>

            <Proficiency list={Resume.technical} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Software
            </Typography>

            <Proficiency list={Resume.software} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Code
            </Typography>

            <Proficiency list={Resume.languages} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Interests
            </Typography>

            <Proficiency list={Resume.interests} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper variant="outlined" square>
            <Typography variant="h5" className={classes.title}>
              Learning
            </Typography>

            <Proficiency list={Resume.learning} />
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper variant="outlined" square>
            <Projects projects={Resume.projects} />
          </Paper>
        </Grid> */}
        <br />
        {/* <br /> !! */}
        <br />
      </Grid>
      <br />
    </Container>
  );
}
