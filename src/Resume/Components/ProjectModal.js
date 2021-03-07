import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SimpleMap from "./SimpleMap";
import SkillRadar from "./SkillRadar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import BusinessIcon from "@material-ui/icons/Business";

import background from "../../img/double-bubble.png";


const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundImage: `url(${background})`,
  },
  root: {
    margin: 10,
    padding: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    height: "35vh",
  },
  gallery: {
    height: "45vh",
  },
  chartDiv: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    height: "90",
    width: "90",
  },
  title: {
    margin: 5,
    padding: 5,
  },
}));

export default function MaxWidthDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  console.log(props);

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={props.open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        classes={{ paper: classes.dialog }}
      >
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={1}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper} square variant="outlined">
                  <Typography variant="h5" className={classes.title}>
                    {props.project.title}
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary={props.project.location} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={props.project.description} />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} square variant="outlined">
                  <div className={classes.chartDiv}>
                    <SkillRadar data={props.project.skills} />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper} square variant="outlined">
                  <SimpleMap />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.gallery} square variant="outlined">
                  Gallery
                </Paper>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
