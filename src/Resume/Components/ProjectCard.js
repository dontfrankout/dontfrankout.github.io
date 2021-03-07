import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    flexShrink: 3,
    boxShadow: theme.shadows[5],
  },
  media: {
    height: 0,
    paddingTop: "75%", // 16:9
  },
  avatar: {
    backgroundColor: "#ee7623",
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    margin: 1,
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();

  const handleClick = () => {
    props.onSelect(props.index);
  };

  return (
    <Card square className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.project.description.substring(0, 140) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.chips}>
          {props.project.skills.map((skill, index) => {
            return (
              <Chip
                key={index}
                label={skill.name}
                size="small"
                className={classes.chip}
              />
            );
          })}
        </Box>
      </CardActions>
    </Card>
  );
}
<Chip label="Basic" />;
