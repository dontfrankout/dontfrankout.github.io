import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    minHeight: 70,
    width: 200,
    maxWidth: 380,
    margin: 4,
    flexGrow: 1,
    flexShrink: 3,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  avatar: {
    backgroundColor: "#ee7623",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    padding: 3,
    border: 3,
  },

  fabButton: {
    zIndex: 1,
    margin: "0 auto",
    color: "#ffffff",
    backgroundColor: "#ee7623",
    size: "large",
  },
  fabButtonSearch: {
    zIndex: 1,
    margin: "0 auto",
    color: "#ffffff",
    backgroundColor: "#47c1e0",
    size: "large",
  },
}));

export default function GettingStarted(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}></Card>
    </>
  );
}
