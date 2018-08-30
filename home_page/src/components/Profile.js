import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    profileImg:{
        paddingRight:1
    },
    pictFrame:{
        paddingRight:30
    },
    area:{
        marginTop: 10
    },
    textArea:{
        padding: 15,
    },
    chips:{
        margin: 7
    }
  });
class Profile extends Component {
    render() {
      return (
    <Card >
        <Grid container>
        <Grid xs={3} align="center" className={ this.props.classes.pictFrame}>
            <CardMedia
                component="img"
                image="images/profile.jpg"
                title="Profile Picture"
                className={ this.props.classes.profileImg}
                />
        </Grid>
        <Grid xs={8}>

        <Typography variant="title" color="primary" className={ this.props.classes.area}>
                I am
            </Typography>
            <Typography className={ this.props.classes.textArea}>
                A full stack developer in New York City. <br/>
                A fan of all kinds of computer stuff and various types of sports.<br/>
                A foodie and enjoy trying different restaurants.<br/>
            </Typography>
            <Typography variant="title"  color="primary">
                I use
            </Typography>
            <Typography className={ this.props.classes.textArea}>
                <Chip label="C#" className={ this.props.classes.chips}/>
                <Chip label="MS SQL" className={ this.props.classes.chips}/>
                <Chip label="Entity Framework" className={ this.props.classes.chips}/>
                <Chip label="Python" className={ this.props.classes.chips}/>
                <Chip label="Javascript" className={ this.props.classes.chips}/>
                <Chip label="MongoDB" className={ this.props.classes.chips}/>
                <Chip label="C++/C" className={ this.props.classes.chips}/>
            </Typography>



                </Grid>
              </Grid>




    </Card>
      )
    }
  }

  export default withStyles(styles)(Profile);