import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Resume from "./Resume/Resume";
import background from "./img/spikes.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <CssBaseline />
      {/* style={{ height: "100vh" }} */}
      <Container maxWidth="lg">
        <br />
        <Resume className={classes.root} />
      </Container>
    </div>
  );
}

export default App;
