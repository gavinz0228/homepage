import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    card:{
        display: 'flex',
    },
    cardContent:{
        paddingLeft: 70
    },
    profileImg:{
        height:270,
        width: 200
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
    <Paper className={ this.props.classes.card}>
      <CardMedia
        component="img"
        image="images/profile.jpg"
        title="Profile Picture"
        className={ this.props.classes.profileImg}
        />
      <CardContent className={ this.props.classes.cardContent}>
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
        </CardContent>
    </Paper>
      )
    }
  }

  export default withStyles(styles)(Profile);