import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({

  });
class Projects extends Component {
    render() {
      return (
        <Card >
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Projects
            </Typography>
            <Typography component="p">
                I'm a full stack developer in New York City. 
                I like all kinds of computer stuff and various types of sports.
            </Typography>
            </CardContent>
            
        </Card>
      
      )
    }
  }
  export default withStyles(styles)(Projects);