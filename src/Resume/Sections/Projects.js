import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import ProjectCard from "../Components/ProjectCard";
import ProjectModal from "../Components/ProjectModal";

import {gaEvent} from "../../ga"

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

  box: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function Projects(props) {
  const classes = useStyles();

  const [currentProject, setCurrentProject] = useState(props.projects[0]);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleCardClick = (index) => {
    setCurrentProject(props.projects[index]);
    gaEvent({ action: 'portfolio_open', category: 'engagement', label: currentProject.title , value: 1 })
    setDetailOpen(true);
  };

  return (
    <Box height="100%" className={classes.root}>
      <div className={classes.root}>
        <Box display="flex" flexWrap="wrap" flexDirection="column">
          <Typography variant="h5" className={classes.title}>
            Selected Projects
          </Typography>
          <Typography variant="subtitle1" className={classes.title}>
            Click on a project to see more!
          </Typography>
          <Typography variant="subtitle2" className={classes.title}>
            (Unfortunately some of my coolest work can't be displayed publicly.
            Please reach out if you want to learn more.)
          </Typography>

          <ProjectModal
            open={detailOpen}
            setOpen={setDetailOpen}
            project={currentProject}
          />
        </Box>

        <div className={classes.root}>
          <Grid container spacing={1}>
            {props.projects.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProjectCard
                    project={item}
                    onSelect={handleCardClick}
                    index={index}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Box>
  );
}
