import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  title:{
      paddingLeft: 50,
      paddingTop: 20
  },
  divider:{
      margin:10
  },
  links:{
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:2,
      paddingRight:2
  }
});
class Projects extends Component {
    render() {
      return (
        <Card >
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2" className={this.props.classes.title}>
                      Projects
              </Typography>
              <Grid container>
               <Grid item xs={3} align="center">
                </Grid>
                <Grid item xs={8}>
                  <List component="nav">
                    <ListItem  className={this.props.classes.links} button component="a" href="https://github.com/gavinz0228/SharpContentScraper">
                      <ListItemText primary="Sharp Content Scraper - A Linq style web scraper library written for C#" />
                    </ListItem>
                    <Divider/>
                    <ListItem  className={this.props.classes.links} button component="a" href="https://github.com/gavinz0228/MLPractice">
                      <ListItemText primary="Machine Learning Practices - A few machine learning practice projects with python and Keras " />
                    </ListItem>
                    <Divider/>
                    <ListItem  className={this.props.classes.links} button component="a" href="https://github.com/gavinz0228/WebQuest-Interpreter">
                      <ListItemText primary="WebQuest Interpreter  - A interpreter written in C++ for debugging and testing HTTP Request restful API for an language called WebQuest created by myself " />
                    </ListItem>
                    <Divider/>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
            
        </Card>
      
      )
    }
  }
  export default withStyles(styles)(Projects);