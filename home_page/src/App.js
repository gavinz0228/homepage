import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import Experiences from './components/Experiences';
import Academic from './components/Academic';
import Projects from './components/Projects';
const styles = theme => ({
  root: {
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize:"cover",
  },
  contentArea:{
    width: 1007,
    margin: 20,
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  divider:{
    margin: 15
  }
});

class App extends Component {

  render() {
    return (
      <Grid container className={this.props.classes.root}>
        <NavBar />
        <Grid container justify="center"  >
          <Paper  className={this.props.classes.contentArea} justify="center">
              <Profile />
              <Divider className={this.props.classes.divider}/>
              <Experiences />
              <Divider className={this.props.classes.divider}/>
              <Academic />
              <Divider className={this.props.classes.divider}/>
              <Projects />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
