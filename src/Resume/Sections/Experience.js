import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

export default function Experience(props) {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {props.experience.map((item, index) => {
          return (
            <React.Fragment key={item.name}>
              <ListItem alignItems="flex-start">
                <Link href={item.link}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt="logo"
                      src={item.logo}
                      className={classes.logo}
                    />
                  </ListItemAvatar>
                </Link>

                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                />
              </ListItem>
              {index + 1 != props.experience.length && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
}
