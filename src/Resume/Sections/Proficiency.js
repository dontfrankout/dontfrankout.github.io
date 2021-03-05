import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import Place from "../Components/Place";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  logo: {
    boxShadow: theme.shadows[10],
  },
}));

function CircularProgressWithLabel(props) {
  let labelText = `${Math.round(props.value)}`;

  let value = props.value;

  if (value >= 100) {
    labelText = "";
    value = 100;
  }

  let determinate = false;

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant={determinate ? "indeterminate" : "determinate"}
        value={value}
        thickness={labelText ? 5 : 8}
        style={{ color: props.color }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {labelText}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Proficiency(props) {
  const classes = useStyles();
  return (
    <>
      <List dense className={classes.root}>
        {props.list
          .sort((a, b) => b.progress - a.progress)
          .map((item, index) => {
            let value = item.progress;
            return (
              <React.Fragment key={item.name}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <CircularProgressWithLabel
                      color={item.color}
                      value={value}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItem>
                {index + 1 != props.list.length && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            );
          })}
      </List>
    </>
  );
}
