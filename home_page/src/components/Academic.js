import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
const styles = theme => ({
    title:{
        paddingLeft: 50,
        paddingTop: 20
    },
    content:{
        marginLeft:240,
    },
    divider:{
        margin:15
    }
  });
class Academic extends Component {
    render() {
      return (
        <Card >
            <CardContent>
                <Typography gutterBottom variant="headline" color="textPrimary" component="h2" className={this.props.classes.title}>
                    Academic
                </Typography>
                    <Grid container>
                         <Grid item xs={3} align="center">
                         2012 - 2016
                         </Grid>
                        <Grid item xs={8}>
                            <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                           City University of New York - Brooklyn College
                            </Typography>
                            <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                            Computer Science
                            </Typography>
                            <Typography>
                              Honor Sciety for the Computing and Information Disciplines<br/>
                            Overall GPA: 3.75 <br/>
                            Major GPA: 3.9 <br/>
                            Dean's List : 2012 - 2016<br/>
                          
                            </Typography>
                         </Grid>
                    </Grid>
            </CardContent>
            
        </Card>
      
      )
    }
  }
  export default withStyles(styles)(Academic);