import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
const styles = theme => ({
    title:{
        paddingLeft: 50,
        paddingTop: 20
    },
    content:{
        marginLeft:240
    },
    divider:{
        margin:15
    },
    locationButton:{
        paddingLeft:0,

    }
  });
class Experiences extends Component {
    render() {
      return (
        <Card >
            <CardContent>
                
                    <Typography gutterBottom variant="headline" color="secondary" component="h2" className={this.props.classes.title}>
                    Experiences
                    </Typography>
                    <Grid container>
                         <Grid xs={3} align="center">
                         01/2016 - Present
                         </Grid>
                        <Grid xs={8}>
                            <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                            Chimera Investment Corporation
                            </Typography>
                            <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                          <Button className={this.props.classes.locationButton} color="primary" href="https://www.google.com/maps/search/?api=1&query=520 Madison Avenue, New York, NY 10022"> 
                             <img src="/images/location.svg" width="20" height="20"  />
                             520 Madison Avenue, New York, NY 10022
                         </Button>
                            </Typography>
                            <Typography>
                            Design tables and implement stored procedures for business applications in MS SQL database<br/>
                            Impletement fornt-end and backend for businese applications<br/>
                            Integrated Aladdin (BlackRock) and CAMRA(SS&C) for the company<br/>
                            Maintain a generic job configuration application for all ETL operations<br/>
                            </Typography>
                         </Grid>
                    </Grid>

                    <Divider className={this.props.classes.divider}/>
                    
                    <Grid container>
                         <Grid xs={3} align="center">
                         07/2014 - 12/2015
                         </Grid>
                        <Grid xs={8}>
                            <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                               NYC Department of Health and Mental Hygiene
                            </Typography>
                            <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                                <Button color="primary" href="https://www.google.com/maps/search/?api=1&query=125 Worth St, New York, NY 10013">
                                <img src="/images/location.svg" width="20" height="20"  />
                                125 Worth St, New York, NY 10013</Button>
                            </Typography>
                            <Typography>
                                Used C# to develop desktop application<br/>
                                Used .Net MVC and Entity Framework develop web application<br/>
                                Used IronPython to develop automated file processing application<br/>
                                Used SQL Server and Mongo DB as backend database<br/>
                            </Typography>
                         </Grid>
                    </Grid>

                   
                    <Divider className={this.props.classes.divider}/>

                    <Grid container>
                         <Grid xs={3} align="center">
                         12/2013 - 06/2014
                         </Grid>
                        <Grid xs={8}>
                            <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                               NYC Administration for Children Service
                            </Typography>
                            <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                            <Button color="primary" href="https://www.google.com/maps/search/?api=1&query=150 William St, New York, NY 10038">
                            <img src="/images/location.svg" width="20" height="20"  />
                            150 William St, New York, NY 10038</Button>
                            </Typography>
                            <Typography>
                                 Used knowledge of HTML, CSS and Javascript to modify web pages<br/>
                                 Created banner, icon, edited pictures by using Photoshop<br/>
                            </Typography>
                         </Grid>
                    </Grid>
            </CardContent>
        </Card>
      )
    }
  }
  export default withStyles(styles)(Experiences);