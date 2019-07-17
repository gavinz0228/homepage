import React, { Component } from 'react';
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
    backgroundSize:"100% 100%",
    height: "100vh",
    resize: "both",
    overflowY: "scroll",
  },
  contentArea:{
    width: 1007,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  divider:{
    margin: 20
  }
});

class App extends Component {
  componentDidMount(){
    document.title="Welcome to Gavin's Homepage!"
  }
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

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
